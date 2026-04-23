package rules

/**
 * Auto Insurance - Driver Validation Rules
 * Project: AutoInsuranceProject
 * Developer: Parasa Vijaya Naga Sirisha
 */

class DriverValidationRules {

  /**
   * Rule 1: Driver Age Validation
   * Driver must be at least 18 years old
   */
  function validateDriverAge(driverAge : int) : String {

    if (driverAge == null) {
      return "Driver age is required"
    }

    if (driverAge < 18) {
      return "Driver must be at least 18 years old. " +
             "Current age: " + driverAge
    }

    if (driverAge > 85) {
      return "Driver age cannot be more than 85 years"
    }

    return null
  }

  /**
   * Rule 2: Driver Risk Level
   * Calculate risk based on age
   */
  function getDriverRiskLevel(driverAge : int) : String {

    if (driverAge < 25) {
      return "High Risk - Higher premium applies"
    } else if (driverAge >= 25 && driverAge <= 60) {
      return "Low Risk - Standard premium applies"
    } else {
      return "Medium Risk - Moderate premium applies"
    }
  }

  /**
   * Rule 3: Driver Name Validation
   */
  function validateDriverName(driverName : String) : String {

    if (driverName == null || driverName == "") {
      return "Driver name is required"
    }

    if (driverName.length() < 2) {
      return "Driver name must be at least 2 characters"
    }

    return null
  }

  /**
   * Rule 4: Premium Calculation
   * Calculate premium based on driver age
   */
  function calculatePremium(basePremium : double,
                            driverAge : int) : double {
    var factor : double

    if (driverAge < 25) {
      factor = 1.5
    } else if (driverAge >= 25 && driverAge <= 60) {
      factor = 1.0
    } else {
      factor = 1.2
    }

    return basePremium * factor
  }

}