using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SPA.NewFolder
{
    public class Medicine
    {
        public string Name { get; set; }
        public string   Brand { get; set; }
        public float Price { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Notes { get; set; }
    }
}
