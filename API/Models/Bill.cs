using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Bill
    {
        public string CompanyName { get; set; }
        public DateTime DueDate { get; set; }
        public decimal AmountDue { get; set; }
    }
}
