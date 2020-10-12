using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.Language.Intermediate;
using Newtonsoft.Json;
using SPA.NewFolder;

namespace SPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        public MedicineController()
        {

        }

        [HttpGet("getMedicine")]
        public IActionResult GetMedicine(string search = "")
        {
            var list = ReadFromFile();
           
            if(list.Count > 0 && !string.IsNullOrEmpty(search))
            {
                list = list.Where(x => x.Name.ToLower().Contains(search.ToLower())
                                || x.Brand.ToLower().Contains(search.ToLower())
                                ).ToList();
            }
            return Ok(list);
        }

        [HttpPost("addMedicine")]
        public IActionResult AddMedicine([FromBody] Medicine medicine)
        {
            var list = ReadFromFile();
            list.Add(medicine);
            var convertedJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            writetolfile(convertedJson);
            return Ok(true);
        }

        
        private List<Medicine> ReadFromFile()
        {
            var result = new List<Medicine>();
            using (var sr = new StreamReader("medicine.json"))
            {
                var data = sr.ReadToEnd();
                 result = JsonConvert.DeserializeObject<List<Medicine>>(data);
            }
            return result ?? new List<Medicine>();
        }

        private void writetolfile(string json)
        {
            System.IO.File.WriteAllText(@"medicine.json", json);
        }
    }
}
