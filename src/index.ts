let employee: {
    readonly id: number,
    readonly name: string,
    retire: (date: Date) => void
} = {
    id: 3, 
    name: "",
    
    retire: (date: Date) => {
        console.log(date);
    }
};