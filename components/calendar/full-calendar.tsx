"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar(events: any) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      initialView="dayGridMonth"
      nowIndicator={true}
      selectable={true}
      selectMirror={true}
      events={events}
      height={"100%"}
      eventClassNames={"bg-base-100 text-base-content"}
    />
  );
}
