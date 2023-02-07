using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETWebApp.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")] //(learned this from the microsoft website, should work) By limiting the range input,
                                                                                                 //the model will throw the user an error if the entry is invalid before posting the data.
        public int Assignments { get; set; }
        [Required] //First I throw the required to indicate this needs to be filled out 
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")] //then I use a range to get the correct input
        public int GP { get; set; } //finally I get the for input and set the data to the value variable 
        [Required]
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")]
        public int Q { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")]
        public int ME { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")]
        public int FE { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Invalid entry. Please enter a grade between 0 and 100.")]
        public int I { get; set; }

    }

}
