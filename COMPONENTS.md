# React Components

## EventDialogComponent

Dialog for Event Creation and Edition.
It displays the corresponding date and provides a text field for the title.

<sub>Source: **src/components/EventDialog.js**</sub>

-----

## Day

Property | Type | Default value | Description
:--- | :--- | :--- | :---
`date`|&lt;Date&gt;|_required_|
`inCurrentMonth`|bool|_required_|Is this day in the current month?
`onClick`|func|_required_|

<sub>Source: **src/components/Month/Day.js**</sub>

-----

## Event

Property | Type | Default value | Description
:--- | :--- | :--- | :---
`title`|string|_required_|
`onClick`|func|_required_|
`onDelete`|func|_required_|

<sub>Source: **src/components/Month/Event.js**</sub>

-----

## MonthComponent

This is the main component and includes the month days and their events.

Property | Type | Default value | Description
:--- | :--- | :--- | :---
`dates`|array|_required_|Days of the weeks involved in the current month display
`today`|&lt;Date&gt;|_required_|

<sub>Source: **src/components/Month/Month.js**</sub>

-----

<sub>Documentation generated using **React Doc Creator v0.0.9**</sub>
