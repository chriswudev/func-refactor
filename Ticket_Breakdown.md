# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
- Create a new table called `facility_agents`\
    acceptance criteria: should define following table
    ```
    id: pk, unique, auto increment
    facilityId: id of facilities table
    agentId: id of agents table
    UNIQUE (facilityId, agentId)
    ```
    estimate: 1 hr
- Create a new table called `reports`\
    acceptance criteria: should define following table
    ```
    id: pk, unique, auto increment
    filename: file name of the generated report
    facility_agent_id: id of facility_agents table
    created: the datetime of the report generation
    ```
    estimate: 1 hr
- Define a function that stores the facility/agent/report related data to `facility_agents` and `reports` tables\
    acceptance criteria: this function should looks like this:\
    input params: facilityId, agentId, reportFileName\
    output: boolean - indicate whether it's successful or not.\
    action:\
        store facilityId/agentId to `facility_agents` table\
        store facility_agent_id/filename to `reports` table\
    estimate: 2 hrs
