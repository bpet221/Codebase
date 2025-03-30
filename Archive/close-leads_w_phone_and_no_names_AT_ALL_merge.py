import requests
import json
import base64
import logging

# Replace with your Close CRM API key
API_KEY = 'api_33iNAai4IbDNvEoAzAokMz.2PkumcahQDGOFyxGFnv1ei'

# API base URL
BASE_URL = 'https://api.close.com/api/v1/'

# Configure logging
logging.basicConfig(level=logging.INFO, filename='/Users/blakepetipas/close_leads_log.txt', filemode='a')

def search_leads(filter_view):
    url = BASE_URL + 'data/search/'
    encoded_api_key = base64.b64encode(f'{API_KEY}:'.encode()).decode()
    headers = {
        'Authorization': f'Basic {encoded_api_key}',
        'Content-Type': 'application/json'
    }
    response = requests.post(url, headers=headers, json=filter_view)
    response.raise_for_status()
    return response.json()

def get_contacts_by_lead(lead_id):
    url = BASE_URL + 'contact/'
    encoded_api_key = base64.b64encode(f'{API_KEY}:'.encode()).decode()
    headers = {
        'Authorization': f'Basic {encoded_api_key}',
        'Content-Type': 'application/json'
    }
    params = {
        'lead_id': lead_id
    }
    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()
    return response.json()

def merge_contacts(named_contact, unnamed_contacts):
    merged_contact = named_contact.copy()
    
    for contact in unnamed_contacts:
        merged_contact['phones'].extend(contact.get('phones', []))
        merged_contact['emails'].extend(contact.get('emails', []))
        merged_contact['urls'].extend(contact.get('urls', []))
        for key, value in contact.get('custom', {}).items():
            merged_contact['custom'][key] = value
    
    return merged_contact

def update_contact(contact_id, contact_data):
    url = BASE_URL + f'contact/{contact_id}/'
    encoded_api_key = base64.b64encode(f'{API_KEY}:'.encode()).decode()
    headers = {
        'Authorization': f'Basic {encoded_api_key}',
        'Content-Type': 'application/json'
    }
    logging.info(f"Updating contact {contact_id} with data: {json.dumps(contact_data, indent=2)}")
    response = requests.put(url, headers=headers, json=contact_data)
    try:
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        logging.error(f"Failed to update contact {contact_id}: {e.response.text}")
        raise
    return response.json()

def delete_contact(contact_id):
    url = BASE_URL + f'contact/{contact_id}/'
    encoded_api_key = base64.b64encode(f'{API_KEY}:'.encode()).decode()
    headers = {
        'Authorization': f'Basic {encoded_api_key}',
        'Content-Type': 'application/json'
    }
    response = requests.delete(url, headers=headers)
    response.raise_for_status()
    return response.json()

def add_note_to_lead(lead_id, note_text):
    url = BASE_URL + 'activity/note/'
    encoded_api_key = base64.b64encode(f'{API_KEY}:'.encode()).decode()
    headers = {
        'Authorization': f'Basic {encoded_api_key}',
        'Content-Type': 'application/json'
    }
    data = {
        'lead_id': lead_id,
        'note': note_text
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()

def main():
    # Define the filter view
    filter_view = {
        "limit": None,
        "query": {
            "negate": False,
            "queries": [
                {
                    "negate": False,
                    "object_type": "lead",
                    "type": "object_type"
                },
                {
                    "negate": False,
                    "queries": [
                        {
                            "negate": False,
                            "related_object_type": "contact",
                            "related_query": {
                                "negate": False,
                                "queries": [
                                    {
                                        "condition": {
                                            "type": "exists"
                                        },
                                        "field": {
                                            "field_name": "name",
                                            "object_type": "contact",
                                            "type": "regular_field"
                                        },
                                        "negate": True,
                                        "type": "field_condition"
                                    },
                                    {
                                        "condition": {
                                            "gt": 0,
                                            "type": "number_range"
                                        },
                                        "field": {
                                            "field_name": "phones_count",
                                            "object_type": "contact",
                                            "type": "regular_field"
                                        },
                                        "negate": False,
                                        "type": "field_condition"
                                    }
                                ],
                                "type": "and"
                            },
                            "this_object_type": "lead",
                            "type": "has_related"
                        },
                        {
                            "negate": False,
                            "queries": [
                                {
                                    "condition": {
                                        "gt": 1,
                                        "type": "number_range"
                                    },
                                    "field": {
                                        "field_name": "num_contacts",
                                        "object_type": "lead",
                                        "type": "regular_field"
                                    },
                                    "negate": False,
                                    "type": "field_condition"
                                }
                            ],
                            "type": "and"
                        }
                    ],
                    "type": "and"
                }
            ],
            "type": "and"
        },
        "results_limit": None,
        "sort": [
            {
                "direction": "desc",
                "field": {
                    "field_name": "num_sms",
                    "object_type": "lead",
                    "type": "regular_field"
                }
            }
        ]
    }

    # Search for leads using the filter view
    search_results = search_leads(filter_view)
    leads = search_results.get('data', [])
    
    for lead in leads:
        lead_id = lead.get('id')
        if lead_id:
            contacts_response = get_contacts_by_lead(lead_id)
            contacts = contacts_response.get('data', [])
            
            named_contacts = [contact for contact in contacts if contact.get('name')]
            unnamed_contacts = [contact for contact in contacts if not contact.get('name')]
            
            if named_contacts:
                primary_contact = named_contacts[0]
                merged_contact = merge_contacts(primary_contact, unnamed_contacts)
                updated_contact = update_contact(primary_contact['id'], merged_contact)
                logging.info(f"Lead ID: {lead_id}, Merged Contact ID: {updated_contact['id']}")
                
                # Delete unnamed contacts
                for contact in unnamed_contacts:
                    delete_contact(contact['id'])
                    logging.info(f"Deleted Unnamed Contact ID: {contact['id']}")
                
                # Add note to lead
                note_text = "BULK EDIT: Contacts missing name fields were merged into other contact."
                add_note_to_lead(lead_id, note_text)
                logging.info(f"Added note to Lead ID: {lead_id}")
                
            elif unnamed_contacts:
                # In case there are no named contacts, use the first unnamed contact as primary
                primary_contact = unnamed_contacts[0]
                merged_contact = merge_contacts(primary_contact, unnamed_contacts[1:])
                updated_contact = update_contact(primary_contact['id'], merged_contact)
                logging.info(f"Lead ID: {lead_id}, Merged Contact ID: {updated_contact['id']}")
                
                # Delete remaining unnamed contacts
                for contact in unnamed_contacts[1:]:
                    delete_contact(contact['id'])
                    logging.info(f"Deleted Unnamed Contact ID: {contact['id']}")

if __name__ == '__main__':
    main()
