function calculateTax ( income: number, taxYear: number = 2022 ): number {
    
    if ( taxYear < 2022 ) {
        return income * 0.2;
    } else {
        return income * 0.3;
    }
}

calculateTax( 1000 );