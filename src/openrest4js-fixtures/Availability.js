import Time from '../openrest4js-helpers/Time.js';

export default function createAvailability() {
    let fixture = {weekly: []};

    return {
        addWeeklyFromDate({_Time = Time, start, end}) {
            let startMinute = Math.floor(_Time.getMinuteOfWeek(start));
            let endMinute = Math.floor(_Time.getMinuteOfWeek(end));
            let duration = endMinute - startMinute;
            fixture.weekly.push({minuteOfWeek: startMinute, durationMins: duration});
            return this;
        },

        val() {
            return fixture;
        }
    };
}
