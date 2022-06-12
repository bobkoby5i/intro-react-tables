import {format, parseISO} from 'date-fns';

export const COLUMNS=[
    {
        Header:'Id',
        Footer:"Id",
        accessor:"id"
    },
    {
        Header:'Frist Name',
        Footer:'Frist Name',
        accessor:"first_name"
    },
    {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:"last_name"
    },
    {
        Header:'country',
        Footer:'country',
        accessor:"country"
    },
    {
        Header:'Date of Birth',
        Footer:'Date of Birth',
        accessor:"dob",
        Cell: ({value}) => {return format(parseISO(value, "YYYY-MM-DD"), "MM/dd/yyyy")}
        },
    {
        Header:'SSN',
        Footer:'SSN',
        accessor:"ssn"
    },
    {
        Header:'Order Date',
        Footer:'Order Date',
        accessor:"order_date",
        Cell: ({value}) => {return format(parseISO(value), "MM/dd/yyyy")}
    },      
    {
        Header:'email',
        Footer:'email',
        accessor:"email"
    }
]

export const GROUPED_COLUMNS = [
    {
        Header:'Id',
        Footer:"Id",
        accessor:"id"
    },
    {
        Header:'Name',
        Footer:"Name",
        columns:[
            {
                Header:'Frist Name',
                Footer:'Frist Name',
                accessor:"first_name"
            },
            {
                Header:'Last Name',
                Footer:'Last Name',
                accessor:"last_name"
            },
        ]
    },
    {
        Header:'country',
        Footer:'country',
        accessor:"country"
    },
    {
        Header:'Date of Birth',
        Footer:'Date of Birth',
        accessor:"dob"
    },
    {
        Header:'SSN',
        Footer:'SSN',
        accessor:"ssn"
    },
    {
        Header:'Order Date',
        Footer:'Order Date',
        accessor:"order_date"
    },    
    {
        Header:'email',
        Footer:'email',
        accessor:"email"
    }    
];
