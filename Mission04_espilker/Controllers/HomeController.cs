using Microsoft.AspNetCore.Mvc;
using Mission05_espilker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_espilker.Controllers
{
    public class HomeController : Controller
    {

        //Controller to point to the Index page
        public IActionResult Index()
        {
            return View();
        }

        //Controller to Get the Grade Calculator page
        [HttpGet]
        public IActionResult Grade_Calc()
        {
            return View();
        }

        //Controller to Post the form's info to the model
        [HttpPost]
        public IActionResult Grade_Calc(GradeCalculatorModel model)
        {
            return View();
        }
    }
}
