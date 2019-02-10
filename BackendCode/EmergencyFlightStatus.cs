using System;
using System.Collections.Generic;
using System.Linq;

namespace BackendCode
{
    public class EmergencyFlightStatus
    {
        

        static void main(string[] args) 
        {

        }

        public static void VerifyPressure(int Altittude, double pressure)
        {
            // double correctPressure = altitudePressureIndex.FirstOrDefault((x) => x.altitude == Altittude).pressure;
            // if (correctPressure == pressure) {
            //     return true;
            // } else {
            //     return false;
            // }
        }

        public static bool VerifyEngines(bool LeftEngine, bool RightEngine)
        {
            if (LeftEngine == true && RightEngine == true)
            {
                return true;
            } 
            else if ((LeftEngine == true && RightEngine == false) || (LeftEngine == false && RightEngine == true)) 
            {
                return false;
            }
            else if(LeftEngine == false && RightEngine == false)
            {
                return false;   
            }
            else 
            {
                return false;
            }
        }

        public static void VerifyFuelLeak(double TotalFuel, double fuelConsumed, double fuelBurned)
        {
            // if()
            // {

            // }else{

            // }
        }

        public static void VerifyTemperature()
        {

        }

        public static void VerifyElectrical()
        {

        }

        public static void VerifyMechanical()
        {

        }
    }
}