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


        public static void VerifyPressure(double altittude, double pressure)
        {
             if (alitude == 0 && pressure == 14.7) {
                 return true;
             }
             else if (altittude == 7500 && pressure == 11)
             {
                 return true;
             } 
             else if (altittude == 15000 && pressure == 8.0)
             {
                return true;
             }
             else if (altittude == 22500 && pressure == 6.2)
             {
                 return true;
             }
             else if (altittude == 30000 && pressure == 4.4){
                 return true;
             }
             else 
             {
                 return false;
             }
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

        public static void VerifyFuelLeak(double fuelBurn, string aircraftType)
        {
            if(aircraftType == "Boeing 737-800" && fuelBurn == 327)
            {
                return true;
            }else if(aircraftType == "Airbus a321" && fuelBurn == 291.5)
            {
                return true;
            }else{
                return false;
            }
        
        }

        public static void VerifyTemperature(double temperature)
        {
            if(temperature == 59)
            {
                return true;
            }else{
                return false;
            }
        }

        public static void VerifyElectrical()
        {
            if(VerifyElectrical == 0)
            {
                return true;
            }else
            {
                return false;
            }
        }

        public static void VerifyMechanical()
        {
            if(mechanical == 0)
            {
                return true;
            }else
            {
                return false;
            }
        }
        
    }
}