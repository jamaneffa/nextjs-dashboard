import {Montserrat, Lusitana} from 'next/font/google'

const montserrat = Montserrat({subsets: ['latin']})

const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
})

export {montserrat, lusitana}