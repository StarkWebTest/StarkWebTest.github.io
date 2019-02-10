using System;

namespace BackendCode.Models
{
    public class FlightDataModel
    {
        public double phase { get; set;}
        public String aircraftType { get; set;}
        public double velocity { get; set;}
        public double altitude { get; set;}
        public double totalDistance { get; set;}
        public double remainingDistance { get; set;}
        public double pressure { get; set;}
        public double temperature { get; set;}
        public double totalFuel { get; set; }
        public double remainingFuel { get; set;}
        public double fuelBurn { get; set;}
        public String origin { get; set;}
        public String destination { get; set;}    
        public double time { get; set;}
        public double weight { get; set;}
        public bool leftEngine { get; set; }
        public bool rightEngine { get; set;}
        public double emergency { get; set;}
    }
}