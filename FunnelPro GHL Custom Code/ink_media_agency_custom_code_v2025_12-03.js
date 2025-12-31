<!-- =====================================
🟢🟢🟢 INK MEDIA AGENCY - CUSTOM GHL CODE
Last Updated: [2025_12_03]
===================================== -->

<script type="text/javascript" defer>

/* =====================================
🟢🟢🟢 CONTACT FIELD DEFINITIONS & VALIDATION
===================================== */

/* 🟢 REQUIRED FIELDS CONFIGURATION [2025_12_03]
🗒️ Defines contact fields and their validation requirements
🗒️ Used to control appointment booking access */

(function() {
    var fields = [
        {
            name: 'contact.company_name',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.city',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.state',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.website',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.lead_status',
            required: false,
            tag: 'select',
        },
        {
            name: 'contact.description',
            required: false,
            tag: 'textarea',
        },
        {
            name: 'contact.first_name',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.last_name',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.email',
            required: true,
            tag: 'input',
        },
        {
            name: 'contact.phone',
            required: false,
            tag: 'input',
        },
        {
            name: 'contact.fitness_subniche_main_focus',
            required: false,
            tag: 'select',
        },
        {
            name: 'contact.lead_score',
            required: false,
            tag: 'select',
        },
        {
            name: 'contact.setter_name',
            required: false,
            tag: 'select',
        },
        {
            name: 'contact.market',
            required: false,
            tag: 'select',
        },
        {
            name: 'contact.active_memberships',
            required: false,
            tag: 'select',
        },
    ]

    /* 🛑 REQUIRED FIELDS CONFIGURATION */

    /* =====================================
🟢🟢🟢 APPOINTMENT BOOKING CONTROL
===================================== */

    /* 🟢 GLOBAL STATE VARIABLES [2025_12_03] */

    // Update missing fields before booking or editing appointments

    var hrCurrentLocation = {}
    var hrCurrentRoute = {}

    var allowToAddAppointment = false

    /* 🛑 GLOBAL STATE VARIABLES */

    /* 🟢 MAIN APPLICATION LOOP [2025_12_03]
🗒️ Runs every 1 second to check and update appointment access */

    setInterval(async () => {
        
        await hrGetOrUpdateGlobalVariables()
        
        if(hrCompany.relationshipNumber === '0-013-420' && hrCurrentLocation && (hrCurrentLocation.id === 'Rfghqe9JReCqHvTnYSdK' || hrCurrentLocation.id === '4h6wxlihyc1wMCzyVRbH')) { 
            hrInitApplication() 
        }

    }, 1000);

    /* 🛑 MAIN APPLICATION LOOP */

    /* 🟢 APPOINTMENT ACCESS CONTROLLER [2025_12_03]
🗒️ Controls add/edit appointment buttons based on required field completion */

    async function hrInitApplication() {

        let myFields = []

        if(hrCurrentRoute.name === 'contact_detail-v2') {

            let localAllowToAddAppointment = []

            fields.forEach(field => {

                if(field.required) {

                    let fieldElement = document.querySelector(`#app #contact-details .hl_contact-details-left div[id="${field.name}"] ${field.tag}[name="${field.name}"]`)

                    // myFields.push(`#app #contact-details .hl_contact-details-left div[id="${field.name}"] ${field.tag}[name="${field.name}"]`)

                    if(fieldElement && fieldElement.value !== '') {
                        localAllowToAddAppointment.push('allowed')
                    } else {
                        localAllowToAddAppointment.push('not-allowed')
                    }

                }
            });


            let formFooterElement = document.querySelector(`#app #contact-details .hl_contact-details-left div.form-footer.save`)
            let rightTabs = document.querySelector(`#app #contact-details .hl_contact-details-right .hl_contact-details-right-tabs`) 
            let addButton = document.querySelector(`#app #contact-details #addAppointmentButton`) 
            let appointmentTab = document.querySelector(`#app #contact-details .hl_contact-details-right ul.nav-tabs li a#appointment-tab`) 
            let appointmentsListWrap = document.querySelector(`#app #contact-details .hl_contact-details-right div.tab-content div.hl_tasks`) 
            let emptyAppointmentsListWrap = document.querySelector(`#app #contact-details .hl_contact-details-right div.tab-content div > div.item-center`) 

            let allAppointments = document.querySelectorAll(`#app #contact-details .hl_contact-details-right div.tab-content div.hl_tasks div.hl_tasks--appointment-detail`) || []

            allowToAddAppointment = !(localAllowToAddAppointment.some(item => item === 'not-allowed')) && !formFooterElement 


            let appointmentTabActive = appointmentTab && appointmentTab.classList && appointmentTab.classList.contains('active')

            /* --- NOT ALLOWED TO ADD APPOINTMENTS --- */
            if(allowToAddAppointment === false) {

                if(appointmentTabActive) 
                {
                    addButton.style['display'] = 'none';
                    addButton.style['opacity'] = '0';
                    addButton.style['pointerEvents'] = 'none';

                    if(rightTabs) {
                        rightTabs.classList.add('appointment-not-allowed')
                        rightTabs.classList.remove('appointment-allowed')

                        toggleIconsToAppointments(true)

                        /* LEARN MORE MODAL - Empty Appointments List */
                        // BLAKE CODE START (Adds a LEARN MORE link with a pop up image with instructions)
                        if (allAppointments.length <= 0) {

                            rightTabs.classList.add('appointment-list-empty')
                            
                            if (emptyAppointmentsListWrap) {
                                let emptyAppointmentAlert = document.querySelector('#empty-appointment-alert');

                                if (!emptyAppointmentAlert) {
                                    emptyAppointmentsListWrap.insertAdjacentHTML('beforeend', `
                                        <div id="empty-appointment-alert" style="color: red; text-align: center;">
                                            <i class="fas fa-exclamation-triangle" style="margin-bottom: 15px;"></i>
                                            <span>You cannot <b>Add</b> or <b>Edit</b> appointments until required contact fields are completed.</span>
                                            <a href="javascript:void(0);" id="learnMoreLink" style="text-decoration: underline; cursor: pointer; display: block; margin-top: 17px; font-size: 12px;">LEARN MORE</a>
                                        </div>
                                    `);

                                    // Attach event listener to the first LEARN MORE link
                                    document.getElementById('learnMoreLink').onclick = function() {
                                        document.getElementById('myModal').style.display = "block";
                                    };
                                } else if (emptyAppointmentAlert) {
                                    emptyAppointmentAlert.style.display = 'flex';
                                }
                            }
                        } else if (allAppointments.length > 0) {

                            rightTabs.classList.remove('appointment-list-empty')



                            let emptyAppointmentAlert = document.querySelector('#empty-appointment-alert');
                            if (emptyAppointmentAlert) {
                                emptyAppointmentAlert.style.display = 'none';
                            }
                        }

                        // BLAKE CODE END


                        /* LEARN MORE MODAL - Existing Appointments List */
                        // BLAKE CODE 2 START
                        if (appointmentsListWrap && !appointmentsListWrap.querySelector('#appointment-alert-not')) {
                            appointmentsListWrap.insertAdjacentHTML('beforeend', `
                                <div id="appointment-alert-not" style="color: red;">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span>You cannot <b>Add</b> or <b>Edit</b> appointments until required contact fields are completed.</span>
                                    <a href="javascript:void(0);" class="learnMoreLink" style="text-decoration: underline; cursor: pointer; display: inline; margin-left: 4px; font-size: 12px; white-space: nowrap;">LEARN MORE</a>
                                </div>
                            `);

                            // Attach event listener to the second LEARN MORE link
                            let newLearnMoreLink = appointmentsListWrap.querySelector('.learnMoreLink');
                            newLearnMoreLink.onclick = function() {
                                document.getElementById('myModal').style.display = "block";
                            };
                        }

                        /* MODAL HTML INJECTION */
                        // Ensure that the modal is only added once
                        if (!document.getElementById('myModal')) {
                            var modalHTML = `
                                <div id="myModal" class="modal">
                                    <div class="modal-content" style="max-width: 700px; margin: 40px auto; padding: 20px;">
                                        <img src="https://storage.googleapis.com/msgsndr/Rfghqe9JReCqHvTnYSdK/media/6584f61ef7f6f5ce66aa5cd6.png" alt="Popup Image" style="width: 100%; height: auto;">
                                    </div>
                                </div>
                            `;
                            document.body.insertAdjacentHTML('beforeend', modalHTML);
                        }

                        /* MODAL CLOSE ON OUTSIDE CLICK */
                        // Existing code for closing modal
                        window.onclick = function(event) {
                            var modal = document.getElementById('myModal');
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        };

                        // BLAKE CODE 2 END
                    }
                } 
                else
                {
                    if(addButton) {
                        addButton.style['display'] = 'block';
                        addButton.style['opacity'] = '1';
                        addButton.style['pointerEvents'] = 'unset';
                    }

                    if(rightTabs) {
                        rightTabs.classList.add('appointment-not-allowed')
                        rightTabs.classList.remove('appointment-allowed')


                        if(allAppointments.length <= 0) {
                            rightTabs.classList.add('appointment-list-empty')

                        } else if(allAppointments.length > 0) {
                            rightTabs.classList.remove('appointment-list-empty')
                        }
                    }


                    let appointmentAlert = document.querySelector('#appointment-alert-not')
                    if(appointmentAlert) {
                        appointmentAlert.style.display = 'none';
                    }

                    let emptyAppointmentAlert = document.querySelector('#empty-appointment-alert')
                    if(emptyAppointmentAlert) {
                        emptyAppointmentAlert.style.display = 'none';
                    }

                    toggleIconsToAppointments(false)
                }

            } else { // allowToAddAppointment === true

                /* --- ALLOWED TO ADD APPOINTMENTS --- */

                if(appointmentTabActive) 
                {
                    if(addButton) {
                        addButton.style['display'] = 'block';
                        addButton.style['opacity'] = '1';
                        addButton.style['pointerEvents'] = 'unset';
                    }

                    if(rightTabs) {
                        rightTabs.classList.remove('appointment-not-allowed')
                        rightTabs.classList.add('appointment-allowed')

                        if(allAppointments.length <= 0) {
                            rightTabs.classList.add('appointment-list-empty')
                        } else if(allAppointments.length > 0) {
                            rightTabs.classList.remove('appointment-list-empty')
                        }
                    }
                    
                    let emptyAppointmentAlert = document.querySelector('#empty-appointment-alert')
                    if(emptyAppointmentAlert) 
                    {
                        emptyAppointmentAlert.style.display = 'none';
                    }


                    let appointmentAlert = document.querySelector('#appointment-alert-not')
                    if(appointmentAlert) 
                    {
                        appointmentAlert.style.display = 'none';
                    }

                    toggleIconsToAppointments(false)
                }
                else
                {
                    if(addButton) {
                        addButton.style['display'] = 'block';
                        addButton.style['opacity'] = '1';
                        addButton.style['pointerEvents'] = 'unset';
                    }

                    if(rightTabs) {
                        rightTabs.classList.remove('appointment-not-allowed')
                        rightTabs.classList.add('appointment-allowed')


                        if(allAppointments.length <= 0) {
                            rightTabs.classList.add('appointment-list-empty')
                        } else if(allAppointments.length > 0) {
                            rightTabs.classList.remove('appointment-list-empty')
                        }
                    }

                    let appointmentAlert = document.querySelector('#appointment-alert-not')
                    if(appointmentAlert) {
                        appointmentAlert.style.display = 'none';
                    }

                    let emptyAppointmentAlert = document.querySelector('#empty-appointment-alert')
                    if(emptyAppointmentAlert) {
                        emptyAppointmentAlert.style.display = 'none';
                    }
                }
            }
        }
    }

    /* 🛑 APPOINTMENT ACCESS CONTROLLER */

    /* 🟢 TOGGLE APPOINTMENT ICONS [2025_12_03]
🗒️ Shows/hides edit and trash icons on appointment cards */

    function toggleIconsToAppointments(add) {

        let appointments = document.querySelectorAll(`#app #contact-details .hl_contact-details-right div.tab-content div.hl_tasks div.hl_tasks--appointment-detail`) || []

        appointments.forEach((appointmentElement, appointmentIndex) => {

            if(appointmentElement) {

                let iconsWrappers = appointmentElement.querySelectorAll('div.hl_tasks--item-footer div.flex.flex-row.justify-between div.hl_tasks--item-footer-trash') || []

                iconsWrappers.forEach((iconWrapper, iconIndex) => {

                    let iconElement = iconWrapper.querySelector('i.icon.--light')

                    if(iconElement) {

                        if(add) {
                            iconElement.style['display'] = 'none';
                        } 
                        else {
                            iconElement.style['display'] = '';
                        }

                        if(add) 
                        {
                            /* Edit Icon Replacement */
                            if(iconElement.classList && iconElement.classList.contains('icon-edit')) {

                                if(!iconWrapper.querySelector('img.icon-edit-icon-img')) 
                                {
                                    iconWrapper.insertAdjacentHTML('beforeend', `<img class="icon-edit-icon-img" src="https://storage.googleapis.com/msgsndr/Rfghqe9JReCqHvTnYSdK/media/6576102cb47c1c45a6108aca.png" width="25" height="25"/>`)
                                } 
                                else 
                                {
                                    let addedImageIcon = iconWrapper.querySelector('img.icon-edit-icon-img')

                                    if(addedImageIcon) {
                                        addedImageIcon.style.display = "inline"
                                    }
                                }
                            }

                            /* Trash Icon Replacement */
                            if(iconElement.classList && iconElement.classList.contains('icon-trash')) {


                                if(!iconWrapper.querySelector('img.icon-trash-icon-img')) 
                                {
                                    iconWrapper.insertAdjacentHTML('beforeend', `<img class="icon-trash-icon-img" src="https://storage.googleapis.com/msgsndr/Rfghqe9JReCqHvTnYSdK/media/65761048b47c1c1a7f108acd.png" width="25" height="25"/>`)
                                } 
                                else 
                                {
                                    let addedImageIcon = iconWrapper.querySelector('img.icon-trash-icon-img')

                                    if(addedImageIcon) {
                                        addedImageIcon.style.display = "inline"
                                    }
                                }
                            }
                        } 
                        else 
                        {
                            /* Restore Edit Icon */
                            if(iconElement.classList && iconElement.classList.contains('icon-edit')) {

                                let addedImageIcon = iconWrapper.querySelector('img.icon-edit-icon-img')

                                if(addedImageIcon) {
                                    addedImageIcon.style.display = "none"
                                }
                            }

                            /* Restore Trash Icon */
                            if(iconElement.classList && iconElement.classList.contains('icon-trash')) {

                                let addedImageIcon = iconWrapper.querySelector('img.icon-trash-icon-img')

                                if(addedImageIcon) {
                                    addedImageIcon.style.display = "none"
                                }
                            }
                        }
                    }

                })

            }

        })

        
    }

    /* 🛑 TOGGLE APPOINTMENT ICONS */

    /* 🟢 GET/UPDATE GLOBAL VARIABLES [2025_12_03]
🗒️ Fetches current company, location, and route data from Vue store */

    async function hrGetOrUpdateGlobalVariables() {
        ([
            hrCompany,
            hrCurrentLocation,
        ] = await Promise.all([
            app.__vue__.$store._actions['company/get'][0](),
            app.__vue__.$store._actions['locations/getCurrentLocation'][0](),
        ]))

        hrCurrentRoute = app.__vue__.$route
    }


window.addEventListener("routeChangeEvent", async function(e) {
        await hrGetOrUpdateGlobalVariables()
    });

    /* 🛑 GET/UPDATE GLOBAL VARIABLES */

})();

/* =====================================
🛑🛑🛑 APPOINTMENT BOOKING CONTROL
===================================== */

</script>

<!-- =====================================
🟢🟢🟢 WEBSITE FIELD LINK & CONTACT PINTOP
===================================== -->

<script>

/* 🟢 WEBSITE FIELD CLICKABLE LINK [2025_12_03]
🗒️ Adds external link icon next to website field on contact details */

(function(){

  let waitForWebsiteField=null;
    function showWebsiteContact() {
        if (!location.href.includes("contacts/detail")) {
            return;
        }
        waitForWebsiteField = setInterval(function(){
        try{

var websiteField = document.querySelector('[name="contact.website"]');
if (websiteField && websiteField.value.trim() != "" && !document.querySelector('.website-link-container')) {
    let websiteDiv = document.createElement("div");
    websiteDiv.className = 'website-link-container';
    websiteDiv.setAttribute('style',`display: inline-flex; align-items: center;`);

    let hlink = websiteField.value;
    let httpsrt = 'https://';
    hlink = httpsrt + hlink.replaceAll(httpsrt, '').replaceAll('http://', '');

    let anchorText = document.createElement("a");
    anchorText.href = hlink;
    anchorText.id='user_website_link';
    anchorText.target = "_blank";
    anchorText.style.marginLeft = "10px"; // Set the margin left to 10px
    anchorText.innerHTML = `<img src='https://storage.googleapis.com/msgsndr/1COAR8FZaPGqvqxKjlzR/media/656e2701e2f89b77a3642d38.png' style="width:12px"/>`;
    

    
    
    
    
    if (document.querySelector('#user_website_link')) {
        document.querySelector('#user_website_link').replaceWith(websiteDiv);
    } else {
        

        let prt=websiteField.parentElement;
        websiteDiv.append(websiteField);
        websiteDiv.append(anchorText);
        prt.appendChild(websiteDiv);
       
    }
        }
}catch(err){
console.log(err);
}
        },1500);
    }
    
   showWebsiteContact();

})();

/* 🛑 WEBSITE FIELD CLICKABLE LINK */

/* 🟢 CONTACT PINTOP FIELD REORGANIZATION [2025_12_03]
🗒️ Moves specific fields to top of contact details
🗒️ Applies custom styling to opportunities and tags */

(function() {

    

    let startpinningontop=null;
    let fieldstopin = ['contact.company_name','contact.city','contact.state','contact.website','contact.lead_status','contact.description']
    let tagsColor = [
            '#00b957',
            '#ffdf00',
            '#ff8600',
            '#e0e0e0',
            '#00d0ff',
            '#0099ff',
            '#00ff0494',
        ]

    let ptt='pintop';
    let user_type='{{user.data.role}}';
    function pinontop() {

        if('{{user.data.type}}'=='agency'){
           //return;
        }

        clearInterval(startpinningontop);
        startpinningontop=null;
      if(!location.href.includes('contacts/detail/'))  {
        return;
      }

      if(!location.href.includes('Rfghqe9JReCqHvTnYSdK') && !location.href.includes('4h6wxlihyc1wMCzyVRbH')){
        return;
      }
      
      startpinningontop = setInterval(function(){
        document.querySelectorAll('[aria-label="Tabs"] span').forEach(p=>{

            p.onclick=function(params) {
                let notalready=document.querySelector('#mainpintop');
                if(notalready){
        
                    console.log('removed');
                    notalready.remove();
                }
            }
        })
        let chckbox=document.querySelector('#contact-hide-empty-fields');
        if(chckbox){
          let firstelement = chckbox.parentElement;
         

          if(user_type=='admin'){
            
            let maindiv=firstelement.parentElement;
            let pintopdiv=document.createElement('div');
            pintopdiv.id='mainpintop';
            pintopdiv.classList.add('py-3','px-3','border-b','flex','flex-column');
            let notalready=document.querySelector('#mainpintop');
            
            if(!notalready){
              maindiv.insertBefore(pintopdiv, firstelement);
              let dndlist = document.querySelector('.dnd-channel-details');
              let oldtext = firstelement.querySelector('div');
             
               let ddt = document.createElement('div');
               ddt.classList.add('flex','flex-column');
               ddt.appendChild(oldtext);
               let xt = document.createElement('span');
               xt.classList.add('hidesavewarning');
               xt.innerHTML='Warning: do not save fields when this is selected, Fields may not saved';
               ddt.appendChild(xt);
               firstelement.classList.add('align-items-start')
               firstelement.append(ddt);
let newfirst = firstelement.cloneNode(true);
let inpnew=newfirst.querySelector('input');
inpnew.id='contact-hide-empty-fieldsnew';
inpnew.onchange=function(e){
let inpold=document.querySelector('#contact-hide-empty-fields');
inpold.checked = e.target.checked;
inpold.dispatchEvent(new Event('change'));


}
firstelement.style.display='none';               dndlist.parentElement.parentElement.parentElement.append(newfirst);
            }
            
            setTimeout(function(){
                 pintopdiv=document.querySelector('#mainpintop');
                fieldstopin.forEach((t,ind)=>{
                  let pt=t.replaceAll('.','');
                    let m = document.querySelector(`.mb-2:not(.pintop) [name="${t}"]`);
                    if(m){
                        x = m.closest('.mb-2');
                        if(x){
                            
                            if(!x.classList.contains(ptt)){
                                document.querySelectorAll('.'+ptt+pt).forEach(xp=>{
                                      xp.remove();
                                });
                                
    
                                
                                let newchild=x;//.cloneNode(true);
                                /*newchild.oninput=function(e){
                                    
                                    let inp =e.target;
                                    let inpt=inp.getAttribute('name') || "";
                                    let org=document.querySelector(`.original_${ptt} [name="${inpt}"]`);
                                    if(org){
                                        org.value = inp.value;
                                        org.dispatchEvent(new Event('input'));
                                    }
                                    
                                }*/
                                newchild.style = 'order:-'+(fieldstopin.length - ind);
                                newchild.classList.add(ptt,ptt+pt);
                                pintopdiv.append(newchild);
                                //x.style = 'display:none!important';
                                newchild.classList.add('original_'+ptt,ptt);
                            }
                        }
                    }
                    
                    


                    let currentContactId = (hrCurrentRoute && hrCurrentRoute.params && hrCurrentRoute.params.contact_id) || ''

                    let opportunitiesWrap = document.querySelector(`#mainpintop ~ .bg-gray-100 .py-3.px-3.border-t.border-b.bg-white`);

                    let opportunitiesWrapAppended = document.querySelector(`#mainpintop #opportunities-wrap`)

 let tags_handler=document.querySelector('.tag-group');
                    if(pintopdiv && opportunitiesWrap && !opportunitiesWrapAppended ) {

                        let previousOpportunityWrapsElements = document.querySelectorAll(`#mainpintop [current-contact-id]`) || []

                        previousOpportunityWrapsElements.forEach(previousOpportunityWrapElement => {
                            previousOpportunityWrapElement.remove()
                        })

                        opportunitiesWrap.setAttribute('id', 'opportunities-wrap')
                        opportunitiesWrap.setAttribute('current-contact-id', currentContactId);
                        if(opportunitiesWrap.children.length==1){
opportunitiesWrap.children[0].click();
                         }

                        pintopdiv.append(opportunitiesWrap)
                    }
                   
                    if(tags_handler && !document.querySelector('.contact_tags')){
let parenttags=tags_handler.parentElement;
parenttags.classList.add('contact_tags');
                      pintopdiv.append(parenttags);
                    }

                    if(opportunitiesWrapAppended && opportunitiesWrapAppended.getAttribute('colors-added') !== 'true') {

                        let tagsElements = opportunitiesWrapAppended.querySelectorAll('.flex.cursor-pointer ~ div > div.tag-group > div.tag') || []
    
                        let colorLooped = false;

                        

/* OPPORTUNITY TAG COLOR CODING [1.23.24] */
// GPT4 EDITS START (BLAKES CODE JAN 23 2024)



tagsElements.forEach(tagElement => {
    const opportunityText = tagElement.textContent.trim();

    if (opportunityText.includes("Disqualified")) {
        tagElement.style.backgroundColor = "#EE3D44"; // Red
    } else if (opportunityText.includes("On Hold")) {
        tagElement.style.backgroundColor = "#CCCCCC"; // Gray
    } else if (["Showed", "Cancel", "No Show", "New Leads", "Engaged", "Reschedule Needed"].some(substring => opportunityText.includes(substring))) {
        tagElement.style.backgroundColor = "#FFBD2D"; // Yellow
    } else if (opportunityText.includes("Confirmed")) {
        tagElement.style.backgroundColor = "#88DD87"; // Light Green
    } else if (["Won", "Base", "Perform", "Core", "Scale", "Scale+"].some(substring => opportunityText.includes(substring))) {
        tagElement.style.backgroundColor = "#009D1E"; // Green
    }

    tagElement.style.color = 'black'; // Set text color to black for all tags

    let tagElementAnchor = tagElement.querySelector('a');
    if (tagElementAnchor) {
        tagElementAnchor.style.color = 'black';

        let tagElementAnchorIcon = tagElementAnchor.querySelector('i');
        if (tagElementAnchorIcon) {
            tagElementAnchorIcon.style.color = 'black';
            tagElementAnchorIcon.style.border = 'none';
        }
    }
});

/* 🛑 OPPORTUNITY TAG COLOR CODING */
// GPT4 EDITS END


                        if(colorLooped) {
                            opportunitiesWrapAppended.setAttribute('colors-added', 'true')
                        }
                    }

              });
            },300);
          }else if(user_type=='user'){
            let cmp_name=document.querySelector('[name="contact.company_name"]');
          if(cmp_name){
            firstelement.style.display='none';
            let form = cmp_name.closest('form');
            if(form){
               let mainid = form.getAttribute('data-vv-scope')||'';
             
               if(mainid!='' && !document.querySelector('#mttop')){
                
                document.head.insertAdjacentHTML('afterbegin',`<style id="mttop">
                
                [id="${mainid}"] > div:first-child,#contact-hide-empty-fields{
                  display:none!important;
                }
  
                </style>`);
                
  
               }else{
                let titlediv = form.parentElement.parentElement.children[0]??null;
                if(titlediv){
                  titlediv.style.display='none';
                }
               }
              
            }
          }
          }
          
        }
      },500);
    }
  
    window.addEventListener("routeChangeEvent", function(){

      setTimeout(pinontop, 5000);

    });
    pinontop();
   
  })();

/* 🛑 CONTACT PINTOP FIELD REORGANIZATION */
  

/* 🟢 MESSAGE ACTION COUNTER [2025_12_03]
🗒️ Tracks SMS/Email message actions via hidden iframe form submission */

let loc_counter = {
  "Rfghqe9JReCqHvTnYSdK":
    "https://api.leadconnectorhq.com/widget/form/159NfJIWYOGMwMJX64A6",
  "4h6wxlihyc1wMCzyVRbH":
    "https://api.leadconnectorhq.com/widget/form/i6lbztqPBI4TFeP0xsCc"

};

window.addEventListener("routeChangeEvent", function(e) {
  
  handleLocCounter();
});

function getContactEmail() {
  let email = "";
  if (location.href.includes("conversations/conversations")) {
    let src = document.querySelector(".multiple-to-email");
    if (src && src.querySelector("[title].truncate")) {
      email = src.querySelector("[title].truncate").getAttribute("title");
    }
  }

  if (location.href.includes("contacts/detail/")) {
    let src = document.querySelector('[name="contact.email"]');
    if (src) {
      email = src.value;
    }
  }

  return email;
}
let form_url = "";


let waitingforconv = null;
function handleLocCounter() {
    try {
        clearInterval(waitingforconv);
        waitingforconv = null;
      } catch (error) {}
  if (
    location.href.includes("contacts/detail/") ||
    location.href.includes("conversations/conversations")
  ) {
    let locid = location.href.split("/")[5] || "";
    form_url = loc_counter[locid] || null;
    if (!form_url) {
      return;
    }

    waitingforconv = setInterval(function() {
        let smsbutton = document.querySelectorAll("#send-sms");
        if (smsbutton.length>0) {
          
          smsbutton.forEach(t=>{
            t.onclick = function() {
                console.log('Sent Click');
                let messageAction = "";
                let email = getContactEmail();
                let smsAct = document.querySelector(".open-sms-tab.active");
                if (smsAct) {
                  messageAction = "SMS";
                }
                let emailAct = document.querySelector(".open-email-tab.active");
                if (emailAct) {
                  messageAction = "EMAIL";
                }
                if (messageAction != "") {
                    if (location.href.includes("conversations/conversations") && email=='') {
                        return;
                    }  
                  setTimeout(function(data){
                    let steditor = document.querySelector('#text-message');
                    let tt=null;
                    if(steditor){
                        tt= steditor?.parentElement?.parentElement?.querySelector('[class*=text-red-]');
                    }
                    else{
                        tt=document.querySelector('#message-composer [class*=text-red-]');
                    }
                    
                    if((messageAction=='EMAIL' && !document.querySelector('#alertModal')) || (messageAction=='SMS' && tt && tt.innerHTML=='')){
                        let xt = document.createElement("iframe");
                        xt.setAttribute("hidden", "hidden");
                        xt.style.display = "none";
                        let contactid='';
                        if(location.href.includes("contacts/detail/")){
                            cnt=location.href.split('contacts/detail/')[1];
                            if(cnt.includes('?')){
                                cnt = cnt.split('?')[0];
                            }
                            contactid=cnt;
                        }
                        let src = form_url+'?';
                        if(contactid!=''){
                            src+='contact_id='+contactid;
                        }else{
                            src+='email='+data.email;
                        }
                        xt.src = `${src}&message_action=${data.messageAction}`;
                      
                        xt.id = "invisible_message_action";
                        xt.onload = function() {
                          setTimeout(function() {
                            let ft = document.querySelector("#invisible_message_action");
                            if (ft) {
                              ft.remove();
                            }
                          }, 2500);
                        };
                        document.body.append(xt);
                    }else{
                        console.log('Invalid Data');
                    }
                  },2500,{
                    email,messageAction
                  });  
                }
              };
          })
        }
    }, 1500);
  }
}
handleLocCounter();

/* 🛑 MESSAGE ACTION COUNTER */

</script>

<!-- =====================================
🛑🛑🛑 WEBSITE FIELD LINK & CONTACT PINTOP (SUB-ACCOUNT: Rfghqe9JReCqHvTnYSdK)
===================================== -->

<!-- =====================================
🟢🟢🟢 SMART LIST SAVE BUTTON (OBFUSCATED)
🗒️ Custom save button for smart list contacts page
===================================== -->

<script>
function _0xb95f(){const _0x453cbe=['creat','utton','2285BljoDI','pro.b','ehold','query','der=\x22','borde','3652jgfVHo','appen','Selec','qJbvu','=\x22sub','kaYxW','Email','r-tra','647274ZBExkT','flex\x20','tons','ocus:','phNZZ','ent','LrCpc','tor','ame','\x20hove','e-500','hl-bt','m\x20tex','2729912JzDKXz','t-whi','fset-','\x20requ','ext-s','ng-ap','class','color','DXIJQ','5277522iteumj','SXXaF','.moda','#app','-cent','te\x20bg','cts/s','2\x20foc','21AaWftk','r:bg-','-4\x20py','trim','AvSsV','mart_','fqXsd','href','items','app.f','main','265155kyDGdE','690sEiaks','[type','l-but','inclu','hostn','displ','All','239322xKzpIK','zxOGv','ple-5','apple','eElem','6CXKBTe','setAt','dow-s','ng-of','mail\x22','focus','des','ine-n','bbcku','-2\x20bo','qhaWi','style',':outl','t-med','-appl','Save','ent\x20t','ired','755361TuNfgP','inner','us:ri'];_0xb95f=function(){return _0x453cbe;};return _0xb95f();}const _0x497928=_0x3d57;function _0x3d57(_0x1cfc7b,_0x7f63a1){const _0xb95fbd=_0xb95f();return _0x3d57=function(_0x3d57be,_0x50d4a9){_0x3d57be=_0x3d57be-0x19e;let _0x5e9ade=_0xb95fbd[_0x3d57be];return _0x5e9ade;},_0x3d57(_0x1cfc7b,_0x7f63a1);}(function(_0x37d80a,_0x15a7d3){const _0x23c40b=_0x3d57,_0x1b8eef=_0x37d80a();while(!![]){try{const _0x4265dd=parseInt(_0x23c40b(0x1ee))/0x1+parseInt(_0x23c40b(0x1c4))/0x2*(-parseInt(_0x23c40b(0x1c9))/0x3)+-parseInt(_0x23c40b(0x1e6))/0x4*(-parseInt(_0x23c40b(0x1e0))/0x5)+-parseInt(_0x23c40b(0x1a9))/0x6+-parseInt(_0x23c40b(0x1b1))/0x7*(parseInt(_0x23c40b(0x1a0))/0x8)+parseInt(_0x23c40b(0x1db))/0x9+parseInt(_0x23c40b(0x1bd))/0xa*(parseInt(_0x23c40b(0x1bc))/0xb);if(_0x4265dd===_0x15a7d3)break;else _0x1b8eef['push'](_0x1b8eef['shift']());}catch(_0x4c0333){_0x1b8eef['push'](_0x1b8eef['shift']());}}}(_0xb95f,0xa3587));location[_0x497928(0x1c1)+_0x497928(0x1f6)]==_0x497928(0x1ba)+'unnel'+_0x497928(0x1e1)+'iz'&&new MutationObserver(function(_0x1c30ed,_0x55dff6){const _0x5ec8bd=_0x497928,_0x3d9ec1={'AvSsV':'#save'+'butto'+'nmain','jHCOQ':function(_0x2b88ec,_0x4e5dd9){return _0x2b88ec!=_0x4e5dd9;},'phNZZ':_0x5ec8bd(0x1ab)+_0x5ec8bd(0x1bf)+_0x5ec8bd(0x1f0),'kaYxW':_0x5ec8bd(0x1be)+_0x5ec8bd(0x1ea)+'mit\x22]','fqXsd':function(_0x58dcca,_0x4e9ce1){return _0x58dcca(_0x4e9ce1);},'bbcku':_0x5ec8bd(0x1ec)+_0x5ec8bd(0x1a3)+_0x5ec8bd(0x1da),'DXIJQ':'conta'+_0x5ec8bd(0x1af)+_0x5ec8bd(0x1b6)+'list/'+_0x5ec8bd(0x1c3),'qJbvu':'[plac'+_0x5ec8bd(0x1e2)+'er=\x22E'+_0x5ec8bd(0x1cd)+']','qhaWi':'.moda'+'l','zxOGv':'saveb'+_0x5ec8bd(0x1df)+_0x5ec8bd(0x1bb),'SXXaF':_0x5ec8bd(0x19e)+'n\x20\x20in'+'line-'+_0x5ec8bd(0x1ef)+_0x5ec8bd(0x1b9)+_0x5ec8bd(0x1ad)+'er\x20px'+_0x5ec8bd(0x1b3)+_0x5ec8bd(0x1d2)+'rder\x20'+_0x5ec8bd(0x1e5)+_0x5ec8bd(0x1ed)+'nspar'+_0x5ec8bd(0x1d9)+_0x5ec8bd(0x1a4)+'m\x20fon'+_0x5ec8bd(0x1d6)+'ium\x20r'+'ounde'+'d\x20sha'+_0x5ec8bd(0x1cb)+_0x5ec8bd(0x19f)+_0x5ec8bd(0x1a1)+_0x5ec8bd(0x1ae)+_0x5ec8bd(0x1d7)+_0x5ec8bd(0x1f8)+_0x5ec8bd(0x1f7)+_0x5ec8bd(0x1b2)+_0x5ec8bd(0x1c7)+'-600\x20'+_0x5ec8bd(0x1ce)+_0x5ec8bd(0x1d5)+_0x5ec8bd(0x1d0)+'one\x20f'+_0x5ec8bd(0x1f1)+'ring-'+_0x5ec8bd(0x1b0)+_0x5ec8bd(0x1dd)+_0x5ec8bd(0x1cc)+_0x5ec8bd(0x1a2)+_0x5ec8bd(0x1b0)+_0x5ec8bd(0x1dd)+_0x5ec8bd(0x1a5)+_0x5ec8bd(0x1c6)+'00\x20','jpijU':_0x5ec8bd(0x1d4),'LrCpc':_0x5ec8bd(0x1a7)+':#fff'+'!impo'+'rtant'};if(location[_0x5ec8bd(0x1b8)][_0x5ec8bd(0x1c0)+_0x5ec8bd(0x1cf)](_0x3d9ec1[_0x5ec8bd(0x1a8)]))try{let _0x422c24=document[_0x5ec8bd(0x1e3)+_0x5ec8bd(0x1e8)+_0x5ec8bd(0x1f5)](_0x3d9ec1[_0x5ec8bd(0x1e9)]),_0x4347c3=_0x422c24['close'+'st'](_0x3d9ec1[_0x5ec8bd(0x1d3)]),_0xc6a333=_0x4347c3['query'+_0x5ec8bd(0x1e8)+_0x5ec8bd(0x1f5)](_0x3d9ec1[_0x5ec8bd(0x1f2)]),_0x2c9d1f=document[_0x5ec8bd(0x1de)+_0x5ec8bd(0x1c8)+_0x5ec8bd(0x1f3)]('a');_0x2c9d1f['id']=_0x3d9ec1[_0x5ec8bd(0x1c5)],_0x2c9d1f[_0x5ec8bd(0x1ca)+'tribu'+'te'](_0x5ec8bd(0x1a6),_0x3d9ec1[_0x5ec8bd(0x1aa)]),_0x2c9d1f[_0x5ec8bd(0x1dc)+'HTML']=_0x5ec8bd(0x1d8),_0x2c9d1f[_0x5ec8bd(0x1ca)+'tribu'+'te'](_0x3d9ec1['jpijU'],_0x3d9ec1[_0x5ec8bd(0x1f4)]);try{submitbuttonold=_0xc6a333['query'+'Selec'+_0x5ec8bd(0x1f5)](_0x3d9ec1[_0x5ec8bd(0x1eb)]),submitbuttonold[_0x5ec8bd(0x1d4)][_0x5ec8bd(0x1c2)+'ay']='none';}catch(_0x5d6ecd){}_0x2c9d1f['oncli'+'ck']=function(_0x4882ad){const _0x114e94=_0x5ec8bd;let _0x48f8dd=document[_0x114e94(0x1e3)+_0x114e94(0x1e8)+'tor'](_0x3d9ec1[_0x114e94(0x1b5)])['close'+'st'](_0x114e94(0x1ab)+'l')[_0x114e94(0x1e3)+'Selec'+'tor']('\x20[pla'+'cehol'+_0x114e94(0x1e4)+_0x114e94(0x1ec)+'\x22]');_0x48f8dd&&_0x3d9ec1['jHCOQ'](_0x48f8dd['value'][_0x114e94(0x1b4)](),'')?(_0xc6a333=_0x4347c3['query'+_0x114e94(0x1e8)+'tor'](_0x3d9ec1[_0x114e94(0x1f2)]),submitbuttonold=_0xc6a333['query'+_0x114e94(0x1e8)+_0x114e94(0x1f5)](_0x3d9ec1[_0x114e94(0x1eb)]),submitbuttonold&&submitbuttonold['click']()):_0x3d9ec1[_0x114e94(0x1b7)](alert,_0x3d9ec1[_0x114e94(0x1d1)]);},_0xc6a333[_0x5ec8bd(0x1e7)+'d'](_0x2c9d1f);}catch(_0x23cc6b){}})['obser'+'ve'](document[_0x497928(0x1e3)+_0x497928(0x1e8)+'tor'](_0x497928(0x1ac)),{'childList':!![],'subtree':!![]});
</script>

<!-- =====================================
🛑🛑🛑 SMART LIST SAVE BUTTON (OBFUSCATED)
===================================== -->


<!-- =====================================
🟢🟢🟢 EMAIL VALIDATION FOR MODALS
===================================== -->

<script>

/* 🟢 EMAIL REQUIRED VALIDATION [2025_12_03]
🗒️ Enforces email field requirement on opportunity and contact modals */

    $(document).ready(function() {

        var intervalIdentifier = setInterval(() => {

            var contactErrorMsg = '<p id="email-error-syed-aun-2" style="" class="hl-input-error mt-2 text-sm">Email address is required</p>';
            var opportunityErrorMsg = '<p id="email-error-syed-aun" style="" class="hl-input-error mt-2 text-sm">Email address is required</p>';


            if( $('#add-opportunities-modal').length > 0 ) 
            {
                if ( $('#opportunities #add-opportunities-modal .modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]').length > 0 ) 
                {
                    if($('#opportunities #add-opportunities-modal .modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]').val() === '') 
                    {
                        $('#opportunities #add-opportunities-modal .modal-footer--inner.nav.between button[type="button"].bg-apple-500').attr('disabled', true);

                        if( $('#add-opportunities-modal #email-error-syed-aun').length === 0 )
                        {
                            $(opportunityErrorMsg).insertAfter('#opportunities #add-opportunities-modal .modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]');
                        }
                        else
                        {
                            $('#email-error-syed-aun').show();
                        }

                    }
                    else if($('#opportunities #add-opportunities-modal .modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]').val() !== '') 
                    {
                        $('#opportunities #add-opportunities-modal .modal-footer--inner.nav.between button[type="button"].bg-apple-500').attr('disabled', false);
                        $('#email-error-syed-aun').hide();
                    }
                    else if($('#opportunities #add-opportunities-modal .modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]').attr('inputListenerAdded') !== 'true') 
                    {
                        $('.modal-body .modal-body--inner form div.form-group input[type="email"][placeholder="Email"]').on('input', function(e) {
                        
                            var emailInput = e.target.value && e.target.value.trim();

                            if(emailInput === '')
                            {
                                $('#opportunities #add-opportunities-modal .modal-footer--inner.nav.between button[type="button"].bg-apple-500').attr('disabled', true);
                                $('#email-error-syed-aun').show();
                            }
                            else
                            {
                                $('#opportunities #add-opportunities-modal .modal-footer--inner.nav.between button[type="button"].bg-apple-500').attr('disabled', false);
                                $('#email-error-syed-aun').hide();
                            }
                        });
                    }
                }
            }


            var modalTitle = $('div.modal-dialog header.modal-header h5.modal-title > h5.modal-title').text().trim();

            if(modalTitle === 'Contact') 
            {
                if ( $('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .form-group .hl-text-input-container input[type="text"][placeholder="Email"]').length > 0 ) 
                {
                    if($('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .form-group .hl-text-input-container input[type="text"][placeholder="Email"]').val() === '') 
                    {
                        $('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .modal-buttons button[type="submit"]').attr('disabled', true);

                        if( $('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner #email-error-syed-aun-2').length === 0 )
                        {
                            $(contactErrorMsg).insertAfter('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .form-group .hl-text-input-container input[type="text"][placeholder="Email"]');
                        }
                        else
                        {
                            $('#email-error-syed-aun-2').show();
                        }
                    }
                    else if($('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .form-group .hl-text-input-container input[type="text"][placeholder="Email"]').val() !== '') 
                    {
                        $('div.modal-dialog div.modal-body div.modal-body div.modal-body--inner form .modal-buttons button[type="submit"]').attr('disabled', false);
                        $('#email-error-syed-aun-2').hide();
                    }
                }
            }

        }, 1000);

    });

/* 🛑 EMAIL REQUIRED VALIDATION */

</script>

<!-- =====================================
🛑🛑🛑 EMAIL VALIDATION FOR MODALS
===================================== -->

<!-- =====================================
🟢🟢🟢 CUSTOM MENU REDIRECT
🗒️ Redirects sub-account dashboards to custom menu links
===================================== -->

<script>

/* 🟢 LOCATION REDIRECT MAPPING [2025_12_03]
🗒️ Maps location IDs to custom menu link UUIDs */

window.custommenuredirect = '';
let to_redirect_locations = {
  'yE71ONz7dKZd3hQ6t1rO':'fb000e01-838f-483e-85d1-36ba3f687637', //150 bay fit
  'UfJk27nyckk9VkM8anUk':'8891785a-a998-49d1-a570-3cbf5ddf209f', //3soteric
  'BUNi67a0rMdonbUIBd1I':'350280b5-f8c4-4719-bc85-c997b0ff1933', //Be fit health club
  'HlFQBLgLjggYuEELiMdo':'b6ffdeaf-006d-4262-973c-cc83ea9a744e', //ABC Gym Template
  'KKOIEVV9h73FTQae9M0M':'a4e0b3df-24d2-41e0-a36a-4aa3e5c55b59', //The Foundation Fitness
  'w9P4K95B0ugVrQ68IEIW':'ea6e6739-139c-42e0-8f0c-7aec14baadc8', //The Forge Fitness
  'I4WlKcqIAl4vgKk8oIrM':'9bde63cd-e03e-46c5-8adb-b6482620be3c', //Glenn Bridge Crossfit
  'P4ZTl2z2DWWCAsxFNyKI':'6f67276e-c3f2-42bc-aafd-38d5c8329915', //Crossfit East Coast
  'XB6lRY4PKaK0XKJ6LDBR':'d4399c62-2c3d-4d6a-b6f5-b436fb648ac4', //Crossfit Bourne
  'u1PsRrlsB3ggvDWOnKPk':'5738b7ee-2f2e-49ef-be0d-0f100c9a23f5', //F45 Training 400 South
  '3HX6scY1QkSlanp7uISk':'9fe64d4a-a60a-4a20-8575-faac60f5fbca', //ForeverStrong Marrottsville
  '9bjQNsK1ZX12AOvo9rld':'90d8d72b-9c2b-4974-acc5-51468327df39', //Regyman Fitness Clearwater
  '0zpSL78oZsqOUHAfvqaw':'947de7ab-1a1b-4f27-a65f-4cbe3d49f361', //Oakwood Capital Advisors
  '9sV0SeqTyJf6fMM42PQm':'76167608-bf57-4f7b-b2de-e65d17167ad2', //Foundation Fitness Online Training
  'Ogn7F0Htj26u2cbqnXDo':'83571779-d5e7-4fb0-aa47-4841786d7cc8', //Core Fitness Training
  '0LkSVgwvpeclwXpZWpsA':'ab3df6bd-ec12-47d3-98a3-812baa6119f7', //AimeeNicotera //double link 
  'ZdcOaxMrqK9uxOr7Pr4r':'82571f80-8c67-40e0-8d97-b009e1041863', //Natures Whisper
  'a9MW7dUPWvkf7F1VGMT5':'fb8ec403-740a-4df5-9a76-032a523bd042', //Regyman Fitness Arbor walk
  'yJ0FoCueQSumFI7jze6a':'f823b545-aa78-4927-bd52-829588962cd2', //F45 Training Sugarhouse
  'jNsR2Ngx3tdXiD912cvi':'09466f60-70a2-4f70-97bb-a1c4c36a95b6', //Regyman Fitness Ascension
  'V2krHs6E65ibz2anFSSw':'76e3972f-5184-4c22-8b27-d58d04233b6a', //F45 Training Holladay
  'qkvaxuOPcA3hySuiH7nb':'d32d4682-e383-48f9-b056-e30819031edf', //Centerline Fitness
  'EJ8xhaYx2k7ZbrbMxzka':'e58bce69-ba8e-4363-9dda-c95fe14cf8e7', //Regyman Fitness Huntsville
  'Uh55NrUOp7T003rbTr6F':'b1c16e11-b13e-4165-82e5-003f3f0ca629', //Redlin Fitness
  'TAPMVVufxUvQR03JdJK9':'17b82c66-c894-4309-8494-f817376f5227', //Regyman Fitness Round Rock
  'T1IE1YuQZbYPQLooX3X6':'848ed98b-aa9f-4dd8-b3d2-ffceced5aa8b', //Hard2Kill Crossfit
  'D3zDRVtnKvsh9cwv3XHw':'a3164626-622c-41cd-8bbf-94745dcf2371', //East Coast Fit //after that custom menu link has no account shown
  'ZOq4UugVkhC9MwEd8pcs':'0f67b606-f69d-4c0d-857d-763a1c77aec2', //Regyman Fitness at The Grove
  'OAtjes1qCF93HrwjsrCb':'e3da8f36-2d2c-467c-9d02-bbb605dc0eaf', //Verge Fitness
  'rZmV3dddMKzLayCnmGbt':'c0e2d91f-aa47-4607-9034-8c41d43dea3e', //Rosswell FitClub //after that custom menu link has no account shown
  '2GvF9HTWnphHi8IjDwIS':'825f4ce8-7c4b-4fc9-842d-66ac3ac553bf', //OsteoStrong Villages
  'O6b8lUhhIJYGkAnKxTnb':'e87ae1f6-6e09-406e-b457-aaa99b8d8a47', //OsteoStrong Willoughby
  'waMUAQr2Kh5IH5KPoigZ':'4313b7ca-2a09-4242-9956-0cbae86fc015', //Glatter Fitness
  'ov6mt5nb4flL791LZC0H':'369e955a-e69d-4d1d-8c2d-6cb3961fb528', //Fitbox Crosstraining
  'xPCWIJEhl3O00R8fsngb':'152518e7-dc70-4bb9-9e8b-5e3c54b40525', //Regyman Fitness bluebonnet
  'dyKgkCSIkYRHbJMSZPZS':'5f8854a8-c4b5-43a4-87cf-73b15e33fab0', //Regyman Fitness Juban
  'CJ15goFgxnNo5u01B1K1':'9cf39bd8-6a76-4933-9bc5-bc7f7fac8e76', //Regyman Fitness Corporate Blvd
  'lRKAJW5eWFabPyRVZRVZ':'4e4258fb-e455-4875-9086-daf3dd6b8de9', //Fit Body BootCamp Scarsdale //after that custom menu link has no account shown
  'CznQPWsHxGi8QWRM3j61':'3403db59-3940-44ed-a9a4-d65b2c19880b', //McCohn Muscle //after that custom menu link has no account shown
  'OepFU8vR8PlGcKzX9uxW':'209c476c-75aa-47bc-b673-9776c144dbc0', //P4L Fitness Inc
  'yD6LKsbhHj6MJ0Om5LHQ':'70d3924c-431c-4dba-875d-8e730270552f', //Thw Covery Wellness - Ascension
  '87WAu6BqwzdVteDCnr1C':'7c2fdf1f-65d6-43f3-92cd-fecb44c09edb', //Fitness Tek
  'knIhqv7tbZ8xmeNAk6qy':'452cddf7-e9dc-46bd-a01a-55470351e435', //Alpha Training Inc
  'utrNflK9bwzMoXaVAdl7':'9571cecf-d64b-41e2-9c31-a74bc6fc0dd9', //Regyman Fitness Pensacola
  'pYmDxTBOWKHMegaujHqS':'47da9a84-f3b7-4a09-85a7-a969f3e1a62b', //Legacy Sports Fitness and Wellness LLC.
  'GCLVaGnyGQK97qTFBBOP':'f974de12-078d-4d9c-a1c7-a1d9dd104a4e', //The HITFIT Gym - Apopka
  'IGr5y3ItMDBOmAaKjZAp':'26fed471-0d9a-471b-b999-898f25e2e1fd', //The HITFIT Gym - Clermont
  'eAnxbBaHt061sQZ3Hlsr':'26c68bdd-a3ef-47b3-9af6-d4dc00e7552a', //The HITFIT Gym - Winter Garden
  'sNQQTPiTMNkHkgHEjwCN':'bd065657-9989-4131-8ade-8892c7781385', //The HITFIT Gym - Riverton
  'VR1aOZY2i37ylOcaHhI9':'2e7316b2-26b2-4bf9-a843-0e02354180c1', //CKO Kickboxing Center City
  'Um9w7vwVnF1UUskNwOhh':'2ca7a5b1-9a35-4892-b85f-8f5fa243570e', //THESUPERTRAINDER LLC
  'aT0nBt6hw6xnUDPuszBp':'a6f341f5-5318-4bc6-930f-f572e50fb04e', //IV Wellness
  'PHJo0QwZfoUPEmpn2nwm':'f129a66d-8651-4f30-a99e-3a4b96fc4f9b', //Cali Cyro Slim
  'PPquO7AHQrTJEQSzwShL':'fcf5d1f1-99c8-4297-a409-1dcc5bc93967', //cKaceeGo Beauty & Wellness
  'Ml9zQmQ22yvKW4lHb5iv':'ff0781d5-237a-4dfd-80eb-0ab5381ffd5a', //Innovative Strength & Conditioning
  'A8u6JyZ9sY6FZNHEidgl':'724a9875-e28b-4ab2-b33f-4bbe2e2f0eb0', //LIVE Fitness
  'XKrzdQEIlGnBUOo2oj4z':'f3b114c7-9226-4ebd-8602-b66378f06810', //CKO Kickboxing Cherry Hill
  'FL5aqF0azlM0tY3dAtkJ':'f3582007-5d7c-4ad8-b337-391666bb6987', //Cryo Fit Body
  'efbIb00v2aQ4Nw2aLWDL':'1c5f8192-cc91-4c37-8507-3d6fce087ad6', //Mendy's Gym
  'KS8vrNixJgUjNPzhMbTl':'d8afd458-810c-4c69-b206-1e064acc6a08', //Mid-American Martial Arts
  'ZIv9d1p2MWLXCu35OKsE':'8db7483a-a7c3-445d-87d6-b7e3e4d1c31a', //Jh'Adore MediSpa
  '2502O9aRN6wNFUxKSlPw':'5c9c86b9-c909-423c-9faf-b12d1983b511', //New You CryoSlimming
  'mmFq3SFjSZdxGcWgrMLv':'5d3e3b65-bea3-4465-8b75-c250fe8983f0', //Xcel Taekwondo & Fitness
  'LEBq6ATSTZDbM3s04ngV':'10065b25-fa59-4e6b-99d0-db45605e21d6', //Insane Fitness
  'mHmZG3yTnH9ERgrJFYgf':'834b108d-9a53-4ec6-93fd-c837ed8e65b4', //SuperHuman LifeStyle Studios
  '8jQFoWdXj3WifIFoCdHr':'0592fe99-006d-46a6-b78f-d64e29f5c374', //CKO Kickboxing Emerson
  'McyERuuijXO92d1eqUlK':'7a941e06-1d0c-4720-ae96-dfbc2d7947b4', //Royal Fitness
  '54tpfVNIIbNoONr2BUc8':'3eef7edb-7086-47e8-bf10-3362d4e03184', //ReNu Cryo & MediSpa
  'XuyxFlEzWHBv66Xefjay':'1afc2975-50de-4c88-8d11-aeaa232ef523', //Smarter Fitness Gym
  'o1QvJ4inVICDat5VcZOB':'8555c20a-b851-4c38-950a-229f1e70fd34', //CKO Kickboxing Bayonee
  'cUFdEy4wr378ScQeISgO':'684b820e-dba7-4915-a8a1-f6119c94ac8b', //The Covery - Huntsville
  '7zLRJFVzk7DTeP06kkZm':'1ec7d1af-59bf-433d-9988-2958bf3d671e', //CKO Kickboxing Park Slope
  'Kqokcxbu6EOgaqiduc9p':'fed2fd00-25cf-42d4-9a81-590cce352d6c', //A Define Image Medical Wellness Center
  'zwNlgGzw489YI57JRm30':'6d97a9d8-2a0f-4386-acad-441ceb52015d', //Let's Get it Fitness
  'y1W8pqfOO1nG4cZrhorr':'4731db2f-8f22-4b4d-b5e1-e3446d78d0a0', //iCRYO SouthPark
  'lqtrv3ZFXoo02prsvnJi':'2c907bf7-e776-498b-a8e6-bedaaf63dd90', //Longevity Sports and Fitness
  'JBp92gBpeHl37kfUESM1':'f1a7fb8a-ddff-4697-833e-e486e38b3b8b', //The Covery Juban
  'QxK9sBh9a8mVlVPtT31A':'6cf08c86-4d0f-4994-bba6-86109ce6e97d', //Crossfit Carolina Beach
  '9UYfheOjv8V9qXJefDaJ':'17325c70-07cd-412a-8742-6ccc0961ba2f', //Quantum Fitness
  'BUNi67a0rMdonbUIBd1I':'350280b5-f8c4-4719-bc85-c997b0ff1933', //be FIT! Health Club
  'lROVnRcZET01HJ3tGwJj':'214811ba-4deb-4ad4-b9fb-88e07b934d00', //C.O.R.E Fitness and boxing Club
  'GUhlrMQ3hUsC7mg6egN8':'13bd80b6-f6ad-4717-bf09-5c07a56542b6', //CKO Kickboxing Hamiltton
  '7pt2Kiu5ePnekKqMb3O8':'4784c91e-fac2-42f4-b92d-1f164167181a', //Radical Athletics
  '3N7bVIBSuI3FsVpLv6Gt':'9bfd1e09-c917-4314-97f1-e81fb5eebb5c', //Simple Body Solution
  'Y1HewPxxnp85z2MJr5N1':'5f6640a5-14da-4bd1-999b-e1e5b836311c', //Neighboorhood Boxing club
  '7U5yw74to8faqwYDi2yr':'b2772356-f550-4f63-b421-f5bcc314f9dd', //ALAL Wellness lounge - Chicago
  'fRoGWGB1BjdFM50CvKkt':'555228f9-e391-4bcb-af44-13526d6a23b9', //ALAL Wellness lounge - Dallas
  'FFKrIDXORHRD7SYBBHtB':'ee8400e6-58f3-41b2-8781-ca68b8c2ca53', //Fit Skin Laser
  'upoK4LzzeAKc84qYWit6':'83da3099-6198-4068-ac7f-4bf479c80767', //BILT Fitness
  'WnMNVBp9uuQfrvZkNzSA':'c7a065f5-9f65-40bc-adf3-4db6739e3492', //King's Camp and Fitness
  'sjFbyC0cnOpf3h5SbODS':'637f2a0d-f3fe-4be4-a237-3a0d32390e89', //iCRYO Blakeney
  'iF6aBwnNjWyJIh5EETHW':'23a8f33a-7fbc-42a1-81a7-31442cb86364', //CKO kickboxing Bay Ridge
  '4fBiZwUl4jtHfVWw5Ddw':'7aa8dea1-e00b-4760-8b97-e9553de95bfb', //CKO kickboxing North Brunswick
  'sO6AIlPCTwe0APRbeqjq':'1cbb5263-38f1-40bc-a13f-d37b6a26f46c', //CKO kickboxing Jersey City
  'xSJpHbfzNUNA7YVYLow4':'f4d766c4-3711-4d3f-b32f-5d79fa916a78', //Crossfit Momentum
  '2L1gR3g85C0eMWjICmQJ':'1d72d3db-af8a-41bf-ade3-e2a4bcf0b298', //Cryo + Co Well Spa
  '5WHfzqXLVYWFnPSBMA7Z':'cdbd503b-479f-40ee-b586-3000eaca78af', //Rodney's Revolution 12-12-12
  'birA1LvGZi0k6RxuvQWy':'92937e23-4dd9-41ee-98d6-5f11e55c0895', //Centripetal Crossfit
  'uxtylXYjFHckZswLtbYh':'61315b5f-c8c9-4530-aa13-7dfceebbf4be', //CKO kickboxing Great Kills
  '7W4O2XIMb94hFxnvqK0p':'4f64855d-d24e-4e94-8bed-7650fbc9c9be', //CKO kickboxing Brickell
  '7jWmIlVTOAdrwvuocdKr':'d257055a-3f7d-49a2-921e-1b653af8dcef', //BlackStone River CrossFit
  
};
new MutationObserver(() => {
  if (('' === window.custommenuredirect && location.href.includes('location') && location.href.includes('dashboard')) || location.href.includes('custom-menu-link')) {
    window.custommenuredirect = location.href;
    if(location.href.includes('custom-menu-link')){
      return;
    }
    try {
      let locationid  = location.href.split('/')[5];
      let isredirect = to_redirect_locations[locationid];
      if(typeof isredirect!='undefined'){
        let currentPath = window.location.pathname;
        let newPath = currentPath.replace("dashboard", "custom-menu-link/"+isredirect);
        window.location.pathname = newPath;
      }
    } catch (e) {

    }
  }
}).observe(document, {
  subtree: true,
  childList: true
});

/* 🛑 LOCATION REDIRECT MAPPING */

</script>

<!-- =====================================
🛑🛑🛑 CUSTOM MENU REDIRECT
===================================== -->

<!-- =====================================
🟢🟢🟢 SIDEBAR NAVIGATION CUSTOMIZATION
===================================== -->

<script>

/* 🟢 DASHBOARD LINK REORDER [2025_12_03]
🗒️ Moves Dashboard link to top of sidebar navigation */

window.userRouteChanged = false


setInterval(function() {

    let elementsList = document.querySelectorAll("#sidebar-v2 nav a > span.h-5.w-5 + span")
    // let navFirstElement = document.querySelector("#sidebar-v2 nav > a");

    for (let i = 0; i < elementsList.length; i++) {
    
        let searchedSpanElement = elementsList[i];
    
        let searchedSpanElementIndex = searchedSpanElement && searchedSpanElement.innerText && searchedSpanElement.innerText.search(/Dashboard (\w)?/gi);
    
        if(searchedSpanElementIndex >= 0) {
    
            let searchedElement = searchedSpanElement.parentElement
            let searchedElementId = searchedSpanElement.parentElement.id

            // let navFirstElement = document.querySelector("#sidebar-v2 nav.flex-1 > a");
            let nav = document.querySelector("#sidebar-v2 nav.flex-1");

            // if(searchedElement.getAttribute('data-element-moved-to-top') !== 'yes' && window.userRouteChanged && 1) {
            if(searchedElement.getAttribute('data-element-moved-to-top') !== 'yes') {
                // nav.prepend(searchedElement);
                // navFirstElement.before(searchedElement);
                document.querySelector("#sidebar-v2 nav #sb_dashboard").before(searchedElement);

                searchedElement.setAttribute('data-element-moved-to-top', 'yes')

                window.userRouteChanged = false
            }
        }
    }



}, 1000);

/* 🛑 DASHBOARD LINK REORDER */

// window.addEventListener('locationChangeEvent', function (e) { 
//     window.userRouteChanged = true
  
// }, false);

// window.addEventListener('routeChangeEvent', function (e) { 
//     window.userRouteChanged = true
// }, false);


</script>

<!-- =====================================
🛑🛑🛑 SIDEBAR NAVIGATION CUSTOMIZATION
===================================== -->

<!-- =====================================
🟢🟢🟢 CUSTOM TASKS LINK
===================================== -->

<script>

/* 🟢 TASKS SIDEBAR LINK [2025-12-30]
🗒️ Adds custom Tasks link to sidebar navigation */

(function () {
  const task_link = document.createElement("a");
  task_link.className = `w-full group px-3 flex items-center md:justify-center lg:justify-start xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-100 hover:opacity-100 py-2 md:py-2`;
  task_link.id = "CustomTask";
  task_link.innerHTML = `
  <span class="h-5 w-5 mr-2"><i class="fas fa-tasks"></i></span>
  <span class="hl_text-overflow md:hidden nav-title lg:block xl:block"> Tasks </span>
  `;
  
  // Add hover styling for Tasks button
  task_link.addEventListener('mouseenter', () => {
    // Only apply hover color if Tasks is NOT currently selected
    const isSelected = sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true' && 
                       window.location.pathname.includes('/tasks');
    if (!isSelected) {
      tasksButtonHovered = true; // Set hover flag
      task_link.style.backgroundColor = '#1A202C';
      setTasksColor('#FFFFFF'); // White text/icon on hover
    }
  });
  
  task_link.addEventListener('mouseleave', () => {
    // Only remove hover color if Tasks is NOT currently selected
    const isSelected = sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true' && 
                       window.location.pathname.includes('/tasks');
    if (!isSelected) {
      tasksButtonHovered = false; // Clear hover flag
      task_link.style.backgroundColor = '';
      setTasksColor('#C0C3C8'); // Gray text/icon when not selected/hovered
    }
  });
  
  // Set initial color for Tasks button (not selected)
  task_link.style.color = '#C0C3C8';
  
  // Also set color on child elements to ensure consistency
  const setTasksColor = (color) => {
    task_link.style.color = color;
    const icon = task_link.querySelector('i');
    const text = task_link.querySelector('span.hl_text-overflow');
    if (icon) icon.style.color = color;
    if (text) text.style.color = color;
  };
  
  setTasksColor('#C0C3C8'); // Initial gray color

  // Track if Tasks was accessed via custom button
  let accessedViaCustomButton = false;
  
  // Track if Tasks button is being hovered
  let tasksButtonHovered = false;
  
  task_link.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (task_link.locationId) {
      const tasksUrl = `/v2/location/${task_link.locationId}/tasks`;
      
      // Set flag that we clicked the custom button
      accessedViaCustomButton = true;
      sessionStorage.setItem('tasksAccessedViaCustomButton', 'true');
      
      // Try using Navigation API if available (modern browsers)
      if (window.navigation && window.navigation.navigate) {
        window.navigation.navigate(tasksUrl);
      } else {
        // Fallback to history.pushState
        const currentPath = window.location.pathname;
        
        history.pushState({}, '', tasksUrl);
        
        // Dispatch GHL's routeChangeEvent with proper format
        const routeChangeEvent = new CustomEvent('routeChangeEvent', {
          detail: {
            to: {
              fullPath: tasksUrl,
              name: 'tasks-v2',
              params: { location_id: task_link.locationId },
              path: tasksUrl,
              query: {}
            },
            from: {
              fullPath: currentPath,
              path: currentPath
            }
          }
        });
        window.dispatchEvent(routeChangeEvent);
      }
    }
  });
  
  // Function to highlight custom Tasks button when on tasks page
  let contactsButtonHovered = false; // Track if Contacts button is being hovered
  
  // Helper function to set Contacts button color (text + icon)
  const setContactsColor = (color) => {
    const contactsLink = document.querySelector('#sb_contacts');
    if (contactsLink) {
      contactsLink.style.color = color;
      const text = contactsLink.querySelector('span.hl_text-overflow');
      const icon = contactsLink.querySelector('img'); // Contacts uses <img> not <i>
      if (text) text.style.color = color;
      if (icon) icon.style.filter = color === '#C0C3C8' ? 'brightness(0.8) opacity(0.7)' : ''; // Gray filter for icon
    }
  };
  
  function highlightTasksButton() {
    const isOnTasksPage = window.location.pathname.includes('/tasks');
    const contactsLink = document.querySelector('#sb_contacts');
    const customTasksLink = document.querySelector('#CustomTask');
    const topMenu = document.querySelector('.topmenu-nav'); // Top contacts menu
    
    // Check if we accessed tasks via custom button
    const viaCustomButton = sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true';
    
    if (isOnTasksPage && customTasksLink && viaCustomButton) {
      // Add active styling to custom Tasks button with specific color
      customTasksLink.classList.add('router-link-active', 'router-link-exact-active');
      customTasksLink.style.opacity = '1';
      customTasksLink.style.backgroundColor = '#1A202C';
      setTasksColor('#FFFFFF'); // White text/icon when selected
      
      // Hide the top menu (Contacts navigation)
      if (topMenu) {
        topMenu.style.display = 'none';
      }
      
      // Override Contacts styling with specific color
      if (contactsLink) {
        contactsLink.classList.remove('router-link-active', 'router-link-exact-active');
        
        // Only set background if NOT currently hovering
        if (!contactsButtonHovered) {
          contactsLink.style.backgroundColor = '#2D3748';
        }
        
        contactsLink.style.opacity = '1';
        setContactsColor('#C0C3C8'); // Gray text/icon when Tasks is selected
        contactsLink.style.pointerEvents = 'auto';
        contactsLink.style.cursor = 'pointer';
        
        // Add hover effect - darker on hover
        contactsLink.onmouseenter = () => {
          if (sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true') {
            contactsButtonHovered = true; // Set hover flag
            contactsLink.style.backgroundColor = '#1A202C';
            setContactsColor('#FFFFFF'); // White text/icon on hover
';'
          }
        };
        contactsLink.onmouseleave = () => {
          if (sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true') {
            contactsButtonHovered = false; // Clear hover flag
            contactsLink.style.backgroundColor = '#2D3748';
            setContactsColor('#C0C3C8'); // Gray text/icon when not hovering
          }
        };
        
        // Fix navigation: Override click to go to correct Contacts URL
        const correctContactsUrl = `/v2/location/${task_link.locationId}/contacts/smart_list/All`;
        
        // Store original click handlers by cloning and replacing
        if (!contactsLink.dataset.fixedForCustomTasks) {
          contactsLink.dataset.fixedForCustomTasks = 'true';
          
          const newContactsLink = contactsLink.cloneNode(true);
          contactsLink.parentNode.replaceChild(newContactsLink, contactsLink);
          
          newContactsLink.addEventListener('click', (e) => {
            if (sessionStorage.getItem('tasksAccessedViaCustomButton') === 'true') {
              e.preventDefault();
              e.stopPropagation();
              
              // Clear the custom flag
              sessionStorage.removeItem('tasksAccessedViaCustomButton');
              
              // Navigate to contacts
              if (window.navigation && window.navigation.navigate) {
                window.navigation.navigate(correctContactsUrl);
              } else {
                window.location.href = correctContactsUrl;
              }
            }
          }, true); // Use capture to intercept early
        }
      }
    } else if (customTasksLink) {
      // Remove active styling when not on tasks page OR not via custom button
      customTasksLink.classList.remove('router-link-active', 'router-link-exact-active');
      
      // Only reset to gray if NOT currently hovering
      if (!tasksButtonHovered) {
        customTasksLink.style.backgroundColor = '';
        customTasksLink.style.opacity = '1';
        setTasksColor('#C0C3C8'); // Gray text/icon when not selected
      }
      
      // Show the top menu again
      if (topMenu) {
        topMenu.style.display = '';
      }
      
      // Restore Contacts to normal
      if (contactsLink) {
        // Remove all custom inline styles
        contactsLink.style.pointerEvents = '';
        contactsLink.style.cursor = '';
        contactsLink.style.color = '';
        contactsLink.style.backgroundColor = '';
        contactsLink.style.opacity = '';
        
        // Reset text and icon colors
        const contactsText = contactsLink.querySelector('span.hl_text-overflow');
        const contactsIcon = contactsLink.querySelector('img');
        if (contactsText) contactsText.style.color = '';
        if (contactsIcon) contactsIcon.style.filter = '';
        
        // Remove custom event handlers
        contactsLink.onmouseenter = null;
        contactsLink.onmouseleave = null;
        
        // If button was cloned for custom behavior, restore it by cloning back
        if (contactsLink.dataset.fixedForCustomTasks === 'true') {
          const restoredContactsLink = contactsLink.cloneNode(true);
          restoredContactsLink.dataset.fixedForCustomTasks = '';
          contactsLink.parentNode.replaceChild(restoredContactsLink, contactsLink);
        }
        
        contactsButtonHovered = false; // Reset hover flag
        
        // Restore active classes if we're on a contacts page
        const isOnContactsPage = window.location.pathname.includes('/contacts');
        if (isOnContactsPage) {
          const restoredLink = document.querySelector('#sb_contacts');
          if (restoredLink) {
            restoredLink.classList.add('router-link-active', 'router-link-exact-active');
          }
        }
      }
      
      // Always clear the flag when not on tasks page or not via custom button
      if (!isOnTasksPage || !viaCustomButton) {
        sessionStorage.removeItem('tasksAccessedViaCustomButton');
      }
    }
  }
  
  // Run on page load
  highlightTasksButton();
  
  // Clear flag when clicking on any other sidebar item (not Tasks or Contacts)
  const addClearFlagListeners = () => {
    document.querySelectorAll('#sidebar-v2 nav a').forEach(link => {
      if (link.id !== 'CustomTask' && link.id !== 'sb_contacts') {
        link.addEventListener('click', () => {
          sessionStorage.removeItem('tasksAccessedViaCustomButton');
          // Immediately trigger cleanup
          setTimeout(() => {
            highlightTasksButton();
          }, 100);
        }, { once: false });
      }
    });
  };
  
  // Add listeners initially and after route changes
  addClearFlagListeners();
  setInterval(addClearFlagListeners, 2000); // Re-add listeners periodically
  
  // Run whenever route changes
  window.addEventListener('routeChangeEvent', highlightTasksButton);
  setInterval(highlightTasksButton, 500);

  const getElementByFn = (selector) => {
    let interval;
    clearInterval(interval);
    return new Promise((resolve) => {
      interval = setInterval(() => {
        const elements = document.querySelectorAll(selector);
        if (elements.length === 1) {
          clearInterval(interval);
          resolve(elements[0]);
        }

        if (elements.length > 1) {
          clearInterval(interval);
          resolve(elements);
        }
      }, 500);
    });
  };

  window.addEventListener("routeChangeEvent", async (e) => {
    const locationId = e.detail.to.params["location_id"];
    task_link.locationId = locationId;
    if (task_link.isConnected) return;
    if (!locationId) return;
    const dashboard = await getElementByFn("#sb_conversations");
    dashboard.after(task_link);
  });

/* 🛑 TASKS SIDEBAR LINK */

})();
</script>

<!-- =====================================
🛑🛑🛑 CUSTOM TASKS LINK
===================================== -->


<!-- =====================================
🟢🟢🟢 JQUERY LIBRARY IMPORT
===================================== -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- =====================================
🛑🛑🛑 JQUERY LIBRARY IMPORT
===================================== -->