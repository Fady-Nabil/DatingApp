using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;

namespace DatingApp.API.Models.Data
{
    public class DataContext : DbContext
    {
        //constructor
        public DataContext(DbContextOptions<DataContext> options)
        : base(options) {}
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}