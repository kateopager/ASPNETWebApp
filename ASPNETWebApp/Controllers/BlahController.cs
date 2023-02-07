using ASPNETWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNETWebApp.Controllers //these controller actions are called when the html pages are nagivated
    //to, it will display the view which is essentially the html page
{
    public class BlahController : Controller
    {
        public IActionResult Index () //calling the index home page
        {
            return View();
        }
        
        [HttpGet]
        public IActionResult Calculator () //public classes are used so that they can be called and viewed on the main page
        {
            return View();
        }
        //above calls the calculator form page, below posts the calculator form inputs using the model
        [HttpPost]
        public IActionResult Calculator(CalculatorModel model)
        {
            return View();
        }
    }
}
