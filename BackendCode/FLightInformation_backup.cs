using System;
using System.Collections.Generic;
using System.Linq;
using BackendCode.Models;

namespace BackendCode
{
    public class FlightInformation
    {
        static void Main(String[] args)
        {  
            
            double totalDistance = 2414016.0;
            double remainingDistance = CalculateRemainingDistance(totalDistance, 0.0, 0.0, 0.0,0.0);
            double percentTraveled = CalculatePercentTraveled(0.0, totalDistance);
            double altitude = CalculateAltitude(0.0);
            double altitude = CalculateVelocity(0.0);
            double distanceTraveled = CalculateDistanceTraveled(totalDistance, remainingDistance); //this gets remaining distance
            for (double i = 1.0; remainingDistance >= 0; i++) { // loops remain less than or equal 0
                distanceTraveled = CalculateDistanceTraveled(totalDistance, remainingDistance);
                percentTraveled = CalculatePercentTraveled(distanceTraveled, totalDistance);
                altitude = CalculateAltitude(percentTraveled);
                double velocity = CalculateVelocity(percentTraveled);
                remainingDistance = CalculateRemainingDistance(totalDistance, remainingDistance, i, altitude,velocity);
                //Console.WriteLine("\n\nDistance Traveled: " + distanceTraveled + " \nPercent Traveled: " + percentTraveled + " \nRemaining Distance: " + remainingDistance);
            }
        }
        
        public static double CalculateFuelConsumption(double TotalFuel, double time) 
        {
            double fuelConsumed =  TotalFuel/time;            
            return fuelConsumed;
        }

        public static double CalculateRemainingFuel(double TotalFuel, double fuelConsumption)
        {
            TotalFuel = TotalFuel - fuelConsumption;                                    
            return TotalFuel;
        }                            

        public static double CalculateRemainingDistance(double TotalDistance, double RemainingDistance, double elapsedTime, double Altitude,double velocity)
        {
            if(elapsedTime == 0.0 || elapsedTime == 1.0)
            {
                double Distance = velocity * elapsedTime;
                RemainingDistance = TotalDistance - Distance;  
                Console.WriteLine("Distance: " + Distance + "\nRemaining Distance: " + RemainingDistance);  
            } else { //If time is greater than 1 then remain distance = remain distance - current distance
                if (Altitude >= 8000.0)
                {
                    Console.WriteLine("Velocity: " + velocity);
                    double Distance = velocity * elapsedTime;
                    RemainingDistance = RemainingDistance - Distance;    
                } 
                else if (Altitude >= 30000.0)
                {
                    Console.WriteLine("Velocity: " + velocity);
                    double Distance = velocity * elapsedTime;
                    RemainingDistance = RemainingDistance - Distance; 
                }
                else if (Altitude >= 8000.0)
                {
                    Console.WriteLine("Velocity: " + velocity);
                    double Distance = velocity * elapsedTime;
                    RemainingDistance = RemainingDistance - Distance; 
                }
                Console.WriteLine("\nRemaining Distance: " + RemainingDistance);
            }
            return RemainingDistance;
        }

        public static double CalculateCabinPressure(double currentAltitude)
        {
            double pressure = altitudePressureIndex.FirstOrDefault((x) => x.altitude == currentAltitude).pressure;
            return pressure;
        }

        public static double CalculatePercentTraveled(double distanceTraveled, double totalDistance)
        {
            double percentTraveled = distanceTraveled/totalDistance;
            return percentTraveled;
        }

        public static double CalculateAltitude(double percentTraveled)
        {

            if (percentTraveled <= 0.10) //increase
            {
                double altitudeChange = 4500.0;
            }
            else if(percentTraveled <= 0.20)
            {
                double altitudeChange = 6000.0;
            }
            else if (percentTraveled <=0.30)
            {
                double altitudeChange = 8500.0;
            }
            else if (percentTraveled <=0.40) //no change
            {
                double altitudeChange = 0.0;
            }
            else if (percentTraveled <=0.50)
            {
                double altitudeChange = 0.0;
            }
            else if (percentTraveled <=0.60)
            {
                double altitudeChange = 0.0;
            }
            else if (percentTraveled <=0.70) //begin decrease
            {
                double altitudeChange = 0.0;
            }
            else if (percentTraveled <=0.80)
            {
                double altitudeChange = -8500.0;
            }
            else if (percentTraveled <=0.90)
            {
                double altitudeChange = -6000.0;
            }
            else if (percentTraveled <= 1.00)
            {                                                                                                    
                double altitudeChange = -4500.0;
            }
            else 
            {
                
            }
            return altitudeChange;
        }

        public static double CalculateVelocity(double percentTraveled)
        {
            
            if (percentTraveled <= 0.10) //increase
            {
                double velocity = 300;
            }
            else if(percentTraveled <= 0.20)
            {
                double velocity = 420;
            }
            else if (percentTraveled <=0.30)
            {
                double velocity = 530;
            }
            else if (percentTraveled <=0.40) //no change
            {
                double velocity = 600;
            }
            else if (percentTraveled <=0.50)
            {
                double velocity = 600;
            }
            else if (percentTraveled <=0.60)
            {
                double velocity = 600;
            }
            else if (percentTraveled <=0.70) //begin decrease
            {
                double velocity = 600;
            }
            else if (percentTraveled <=0.80)
            {
                double velocity = 530;
            }
            else if (percentTraveled <=0.90)
            {
               double velocity = 420;
            }
            else if (percentTraveled <= 1.00)
            {                                                                                                    
                double velocity = 300;
            }      
            return velocity;
        }

        

        public static double CalculateDistanceTraveled(double TotalDistance, double RemainingDistance)
        {
            double DistanceTraveled = TotalDistance - RemainingDistance;
            return DistanceTraveled;
        }
    }

}