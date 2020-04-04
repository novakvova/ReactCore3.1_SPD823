using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AppReact.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AppReact.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TestController : ControllerBase
    {
        static List<AnimalViewModel> model = new List<AnimalViewModel>();
        public IActionResult GetList()
        {
            return Ok(model);
        }
        [HttpPost("create")]
        public IActionResult AddModel([FromBody]AnimalViewModel tmp)
        {
            model.Add(tmp);
            return Ok();
        }
    }
}