using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_espilker.Models
{
    public class GradeCalculatorModel
    {
        // Create a getter and setter for each value pulled from the page

        //Make sure each value is between one and 100
        [Range(0, 100)]
        public float Assignment { get; set; }
       
        [Range(0, 100)]
        public float Project { get; set; }

        [Range(0, 100)]
        public float Quiz { get; set; }

        [Range(0, 100)]
        public float Midterm { get; set; }

        [Range(0, 100)]
        public float Final { get; set; }

        [Range(0, 100)]
        public float Intex { get; set; }
    }
}
