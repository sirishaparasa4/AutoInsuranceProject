package rules

/**
 * Auto Insurance - Vehicle Validation Rules
 * Project: AutoInsuranceProject
 * Developer: Parasa Vijaya Naga Sirisha
 */

class VehicleValidationRules {

  /**
   * Rule 1: Vehicle Year Validation
   * Vehicle must not be older than 20 years
   */
  function validateVehicleYear(vehicleYear : int) : String {
    var currentYear = 2026
    var vehicleAge = currentYear - vehicleYear

    if (vehicleYear == null) {
      return "Vehicle year is required"
    }

    if (vehicleAge > 20) {
      return "Vehicle cannot be more than 20 years old. " +
             "Current vehicle age: " + vehicleAge + " years."
    }

    if (vehicleYear > currentYear) {
      return "Vehicle year cannot be in the future"
    }

    return null
  }

  /**
   * Rule 2: Registration Number Validation
   * Registration number is required
   */
  function validateRegistrationNumber(regNumber : String) : String {
    if (regNumber == null || regNumber == "") {
      return "Registration number is required"
    }

    if (regNumber.length() < 5) {
      return "Registration number must be at least 5 characters"
    }

    return null
  }

  /**
   * Rule 3: Vehicle Make Validation
   * Make is required
   */
  function validateMake(make : String) : String {
    if (make == null || make == "") {
      return "Vehicle make is required"
    }
    return null
  }

}