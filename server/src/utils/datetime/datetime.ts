export abstract class Time {

    static getCurrentTime(): string {
        const dateTime: Date = new Date();
        return `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    }

    static getCurrentDate(): string {
        const dateTime: Date = new Date();
        return `${dateTime.getDate()}`;
    }
}