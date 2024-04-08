using CIoTD.Infrastructure;
using CIoTD.Security;
using Microsoft.AspNetCore.Mvc;

namespace CIoTD.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController: ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<dynamic>> AuthenticateAsync([FromBody] User model)
        {
            var user = UserRepository.Get(model.Username, model.Password);
            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            var token = JwtAuthenticationManager.GenerateToken(user);
            user.Password = "";
            return new
            {
                user = user,
                token = token
            };
        }
    }
}
