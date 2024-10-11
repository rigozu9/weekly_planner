import { useEffect, useState } from 'react'
import { Box, Container, LinearProgress, Typography } from "@mui/material"


const ThisWeek = () => {
    const [weekNumber, setWeekNumber] = useState(0)
    const [today, setToday] = useState('')
    const [weekRange, setWeekRange] = useState('')

    const plans = [
        {
          subject: 'Math Course',
          goal: 10,
          studied: 7,
          tasks: 'Exercises 1-5',
          tasks_done: 'Exercies 1-3'
        },
        {
          subject: 'Science Project',
          goal: 5,
          studied: 3,
          tasks: 'Research Topic and Write Report',
          tasks_done: 'Research Topic done'
        }
    ]

    useEffect(() => {
        const today = new Date()

        const formattedToday = today.toLocaleDateString('fi-EN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
        });

        setToday(formattedToday);

        const week = getWeekNumber(today)
        setWeekNumber(week)

        const { monday, sunday } = getWeekRange(today)
        setWeekRange(`${monday} - ${sunday}`)
    }, [])

    const getWeekNumber = (date) => {
        const startOfYear = new Date(date.getFullYear(), 0, 1)
        const pastDaysOfYear = (date - startOfYear) / 86400000
        return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7)
    }

    const getWeekRange = (date) => {
        const currentDay = date.getDay()
        const first = date.getDate() - currentDay + (currentDay === 0 ? -6 : 1)
        const monday = new Date(date.setDate(first))
        const sunday = new Date(date.setDate(monday.getDate() + 6))
    
        const options = { month: 'long', day: 'numeric' }
        return {
          monday: monday.toLocaleDateString('en-US', options),
          sunday: sunday.toLocaleDateString('en-US', options)
        }
    }

    return (
        <Container maxWidth="sm">
            <Box mb={4}>
                <Typography variant="h4" compoent="h2">
                    Week {weekNumber} {weekRange} 
                </Typography>
                <Typography variant="h4" compoent="h2">
                    Today {today}
                </Typography>
            </Box>

            {plans.map((plan, index) => (
                <Box key={index} mb={4} border={3} borderColor="grey.300" borderRadius={2}>
                    <Typography variant="h5" gutterBottom>
                        {plan.subject}
                    </Typography>

                    <Typography gutterBottom>
                        Study time goal {plan.goal} hours
                    </Typography>

                    <Typography>
                        What to do: {plan.tasks}
                    </Typography>

                    <Typography>
                        Done: {plan.tasks_done}
                    </Typography>

                    <Box mt={2}>
                        <Typography>
                            Progress: {plan.studied} / {plan.goal} hours
                        </Typography>
                        <LinearProgress 
                            variant="determinate"
                            value={(plan.studied/plan.goal)*100}
                            sx={{height:15, borderRadius: 5, mt: 1}}
                        />
                    </Box>
                </Box>
            ))}
        </Container>
    )
}

export default ThisWeek