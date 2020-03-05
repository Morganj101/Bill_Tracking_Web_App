using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Payment
    {
        public string PayTo { get; set; }
        public DateTime BillDueDate { get; set; }
        public DateTime PaymentDate { get; set; }
        public decimal AmountPaid { get; set; }
    }
}
