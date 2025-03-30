import requests

# Replace with your Close API key
API_KEY = 'api_33iNAai4IbDNvEoAzAokMz.2PkumcahQDGOFyxGFnv1ei'
# Smart View ID
SMART_VIEW_ID = 'save_v70DNK8aMBbGV696QP9PUEvkMCqc9PyrYvs1XKWxeTe'

def get_leads_from_smart_view(api_key, smart_view_id):
    url = f'https://api.close.com/api/v1/lead/'
    params = {
        'query': f'smart_view_id:{smart_view_id}'
    }
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }

    response = requests.get(url, headers=headers, params=params)
    response.raise_for_status()  # Raise an error for bad status codes

    leads = response.json()['data']
    return leads

def list_lead_names(leads):
    lead_names = [lead['name'] for lead in leads if 'name' in lead]
    return lead_names

def main():
    leads = get_leads_from_smart_view(API_KEY, SMART_VIEW_ID)
    lead_names = list_lead_names(leads)

    print("Lead Names:")
    for name in lead_names:
        print(name)

if __name__ == "__main__":
    main()
 