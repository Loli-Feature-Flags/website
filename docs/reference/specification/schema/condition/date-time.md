# Date Time Condition

A date time condition compares the current time/the time when the condition is evaluated
against a specified operand date and time.

## Modes

A date time condition allows you to compare time using a "global" and a "local" mode.

Technically, the mode is specified by the attribute [`timezoneOffsetMode`](#timezoneoffsetmode).

Let's assume you define the condition by saying:
> This condition shall evaluate to true, when the evaluation date and time is
> after or equals the 1st of July 2024, 09:00 (GMT+2).

### Global

In the global mode, the specified time is timezone-sensitively compared against
the date and time of the timezone where the condition is evaluated.

Condition: Translated date and time must be `>= 1st of July 2024, 09:00 (GMT+2)`

Condition evaluated in Berlin:
- Local date and time: `1st of July 2024, 12:34 (GMT+2)`
- Translated date and time: `1st of July 2024, 12:34 (GMT+2)` (no change – same timezone)
- Evaluation result: `true` ✅

Condition evaluated in Sydney:
- Local date and time: `1st of July 2024, 14:34 (GMT+10)`
- Translated date and time: `1st of July 2024, 06:34 (GMT+2)`
- Evaluation result: `false` ❌

Condition evaluated in New York:
- Local date and time: `1st of July 2024, 02:15 (GMT-4)`
- Translated date and time: `1st of July 2024, 08:15 (GMT+2)` (translate to GMT+2)
- Evaluation result: `false` ❌

Condition evaluated in San Francisco:
- Local date and time: `1st of July 2024, 02:15 (GMT-7)`
- Translated date and time: `1st of July 2024, 11:15 (GMT+2)` (translate to GMT+2)
- Evaluation result: `true` ✅

::: tip
The global mode is recommended if you want to create a scheduled rollout
that rolls a feature out to users all over the globe at the same time
(meaning for some during the day, for some during the night).
::: 

### Local

In local mode, the timezone of the date time operand is completely ignored.
It's like we simply compare the year, month, day, hours, and minutes numbers
without knowing any timezones against the year, month, day, hours, and minutes
numbers of the local date and time.

Condition: Translated date and time must be `>= 1st of July 2024, 09:00`

Condition evaluated in Berlin:
- Local date and time: `1st of July 2024, 12:34 (GMT+2)`
- Evaluation result: `true` ✅

Condition evaluated in Sydney:
- Local date and time: `1st of July 2024, 14:34 (GMT+10)`
- Evaluation result: `true` ✅

Condition evaluated in New York:
- Local date and time: `1st of July 2024, 02:15 (GMT-4)`
- Evaluation result: `false` ❌

Condition evaluated in San Francisco:
- Local date and time: `1st of July 2024, 02:15 (GMT-7)`
- Evaluation result: `false` ❌

::: tip
The local mode is recommended if you want to create a scheduled
rollout that rolls out a feature to users based on their
local time. The above example could mean: "Roll the feature out
after user woke up and started working at 9 in the morning."
:::

## Schema

```json
{
  "type": "dateTime",
  "operator": "equalsOrIsAfter",
  "operand": {
    "date": "2024-12-24",
    "time": "18:00:00",
    "timezoneOffset": 60 
  },
  "timezoneOffsetMode": "localOffset"
}
```

## Attributes

### type

- Type: `"dateTime"`
- Required

Denotes the condition object as a date time condition.

### operator

- Type: [`DateTimeConditionOperator`](#datetimeconditionoperator)
- Required

The operator to use when comparing the current/evaluation date and time against the
`operand` date and time.

### operand

- Type: [`DateTimeConditionOperand`](#datetimeconditionoperand)
- Required

A specified date and time the current/evaluation date and time shall be compared
against when evaluating the condition.

### timezoneOffsetMode

- Type: [`DateTimeConditionTimezoneOffsetMode`](#datetimeconditiontimezoneoffsetmode)
- Required

Specified the [date and time evaluation mode](#modes) that shall be used.

## Utility Types

### DateTimeConditionOperator

Type: `"equalsOrIsAfter" | "isBefore"`

Operators and what they do:
- `"equalsOrIsAfter"`: Evaluates to `true`, if the current/evaluation date and time is after or equals the `operand` date and time.
- `"isBefore"`: Evaluates to `true`, if the current/evaluation date and time is strictly before the `operand` date and time.

### DateTimeConditionOperand

Type: `{ date: string, time: string, timezoneOffset: number }`

Attributes and what they mean:
- `date`: An ISO date in the format `YYYY-MM-DD`.
- `time`: An ISO time in the format `H:mm:ss[.SSSSSS]`.
- `timezoneOffset`: A number denoting the timezone offset relative to UTC in minutes. GMT+2 would be `120`, and GMT-4 would be `-360`.

### DateTimeConditionTimezoneOffsetMode

Type: `"operandOffset" | "localOffset"`

Modes and what they do:
- `"operandOffset"`: Specifies that the [global evaluation mode](#global) shall be used.
- `"localOffset"`: Specifies that the [local evaluation mode](#local) shall be used.
