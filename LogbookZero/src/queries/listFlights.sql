/* SELECT @Email NVARCHAR(100) */
SELECT 
    Email,
    FlightDate,
    AircraftType,
    AircraftRegistration,
    Position,
    FromCode,
    ToCode
FROM LogItems
WHERE Email = 'starkc920@outlook.com'
GROUP BY FlightDate
/* WHERE Email = @Email */
