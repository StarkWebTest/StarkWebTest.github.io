/*SELECT TOP 5 @Email NVARCHAR(100) */
SELECT TOP 5
    Email,
    FlightDate,
    AircraftType,
    AircraftRegistration,
    Position,
    FromCode,
    ToCode
FROM LogItems
WHERE Email = 'starkc920@outlook.com'
/*WHERE Email = @Email */
ORDER BY FlightDate DESC

