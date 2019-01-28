export class LogItem {
    Id: number;
    Email: string;
    FlightDate: Date;
    AircraftType: string;
    AircraftRegistration: string;
    Position: string;
    FromCode: string;
    ToCode: string;
    SingleEngineDayPilot: number;
    SingleEngineDayDual: number;
    SingleEngineNightPilot: number;
    SingleEngineNightDual: number;
    MultiEngineDayPilot: number;
    MultiEngineDayDual: number;
    MultiEngineDayCopilot: number;
    MultiEngineNightPilot: number;
    MultiEngineNightDual: number;
    MultiEngineNightCopilot: number;
    CrossCountryDayPilot: number;
    CrossCountryDayDual: number;
    CrossCountryNightPilot: number;
    CrossCountryNightDual: number;
    InstrumentHood: number;
    InstrumentCloud: number;
    InstrumentSim: number;
    FlightNotes: string;
}