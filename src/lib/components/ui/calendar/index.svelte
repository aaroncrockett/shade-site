<script lang="ts">
	import CalendarControls from './Controls.svelte';
	import CalendarBody from './Body.svelte';
	import {$lib/components/utils/calendar
		getCurrentMonth,
		getMonthDays,
		getNextMonth,
		getPrevMonth
	} from '$lib/components/utils/calendar';

	let currentMonth = getCurrentMonth();
	let days = getMonthDays(currentMonth);

	function nextMonth() {
		currentMonth = getNextMonth(currentMonth);
		days = getMonthDays(currentMonth);
	}

	function prevMonth() {
		currentMonth = getPrevMonth(currentMonth);
		days = getMonthDays(currentMonth);
	}
</script>

<div>
	<CalendarControls {currentMonth} onPrevMonth={prevMonth} onNextMonth={nextMonth} />

	<CalendarBody {days} />
</div>
