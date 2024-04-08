using CIoTD.Security;

namespace CIoTD.Infrastructure
{
    public static class UserRepository
    {
        public static User Get(string username, string password)
        {
            if(username == "admin" && password == "admin")
            {
              return new User { Id = 1, Username = username, Password = password, Role = "" };
            }

            return null;
        }
    }
}
