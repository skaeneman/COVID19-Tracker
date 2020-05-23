import React, { Component } from 'react'
import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StateSearch from '../search/StateSearch';
import Footer from '../Footer';
import StatePolicyData from '../state-data/StatePolicyData';
import StateFaceMaskData from '../state-data/StateFaceMaskData';
import StateBusinessData from '../state-data/StateBusinessData'
import StatePropertyData from '../state-data/StatePropertyData';
import StateHealthCareData from '../state-data/StateHealthCareData';

export default class StatePolicyPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      id: '',
      stateName: '',
      k12SchoolsClosed: '',
      shelterInPlaceStart: '',
      shelterInPlaceEnd: '',
      stateOfEmergency: '',
      updatedAt: '',
      createdAt: '',

      //businesses
      dayCaresClosedOn: '',

      // face masks
      mandateUseForEveryone: '',
      mandateUseForEmployeesOfPublicFacingBusinesses: '',

      // properties
      stopInitiatingEvictions: '',
      stopEnforcingEvictions: '',
      gracePeriodOrSecurityDepositTowardsRent: '',
      frozeUtilityShutOffs: '',
      frozeMortgagePayments: '',

      // health care
      modifyMedicaidWithWaivers: '',
      acaSpecialEnrollmentPeriod: '',
      audioOnlyTelehealth: '',
      allowOrExpandMedicaidTelehealth: '',
      suspendedElectiveMedical: '',
      resumedElectiveMedical: '',
      madeEffortsToLimitAbortions: false,
      limitAbortionDetails: '',
      medicaidExpansion: false,

    }    
  }

  // gets data returned from the select state dropdown
  callbackFunction = (childData) => {
    console.log("StatePolicy: ", childData);
     
    // set the "this.state" data for a US State
    this.setState({
      id: childData.id,
      stateName: childData.state_name,
      k12SchoolsClosed: childData.k_12_schools_closed,
      shelterInPlaceStart: childData.shelter_in_place_start,
      shelterInPlaceEnd: childData.shelter_in_place_end,
      stateOfEmergency: childData.state_of_emergency,
      updatedAt: childData.updated_at,
      createdAt: childData.created_at,

      // business
      dayCaresClosedOn: childData.business.day_cares_closed,
      //TODO:  ADD REST OF BIZ DATA

      // face masks
      mandateUseForEveryone: childData.face_mask.mandate_use_for_everyone,
      mandateUseForEmployeesOfPublicFacingBusinesses: childData.face_mask.mandate_use_for_employees_of_public_facing_businesses,

      // property data
      stopInitiatingEvictions: childData.property.stop_initiating_evictions,
      stopEnforcingEvictions: childData.property.stop_enforcing_evictions,
      gracePeriodOrSecurityDepositTowardsRent: childData.property.grace_period_or_security_deposit_towards_rent,
      frozeUtilityShutOffs: childData.property.froze_utility_shut_offs,
      frozeMortgagePayments: childData.property.froze_mortgage_payments,

      // health care
      modifyMedicaidWithWaivers: childData.health_care.modify_medicaid_with_1135_waivers,
      acaSpecialEnrollmentPeriod: childData.health_care.aca_special_enrollment_period,
      audioOnlyTelehealth: childData.health_care.audio_only_telehealth,
      allowOrExpandMedicaidTelehealth: childData.health_care.allow_or_expand_medicaid_telehealth,
      suspendedElectiveMedical: childData.health_care.suspended_elective_medical,
      resumedElectiveMedical: childData.health_care.resumed_elective_medical,
      madeEffortsToLimitAbortions: childData.health_care.made_efforts_to_limit_abortions,
      limitAbortionDetails: childData.health_care.limit_abortion_details,
      medicaidExpansion: childData.health_care.medicaid_expansion,
    });
    console.log("missing data...: ", this.state.medicaidExpansion)

  }

  render() {
    return (
      <div>
        <Navigation 
          isLoggedIn={this.props.loggedInStatus} 
          user={this.props.user}
          handleLogoutClick={this.props.handleLogoutClick} 
          handleLogout={this.props.handleLogout} 
        />
        <Container>
         {/* pass the dropdown value from the StateSearch child back to this parent componenet  */}
          <StateSearch parentCallback={this.callbackFunction} /> 

          {/* populate the page with the JSON callback data */}
          <StatePolicyData stateData={this.state} />
          <StateFaceMaskData faceMaskData={this.state} />
          <StateBusinessData businessData={this.state} />
          <StatePropertyData propertyData={this.state} />
          <StateHealthCareData healthCareData={this.state} />

        </Container>
        {/* <Footer /> */}
      </div>
    )
  }
}
