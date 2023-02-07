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
        [Range(0,100)]
        public int Assignments { get; set; }
        [Range(0, 100)]
        public int GP { get; set; }
        [Range(0, 100)]
        public int Q { get; set; }
        [Range(0, 100)]
        public int ME { get; set; }
        [Range(0, 100)]
        public int FE { get; set; }
        [Range(0, 100)]
        public int I { get; set; }

    }

}
