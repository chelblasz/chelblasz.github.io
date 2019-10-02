public static void main(String[] String) {
    scanner input = new Scanner(system.in);
    double investmentAmount = input.nextDouble();

    System.out.print("enter annual interest rate in percentage: ");
    double anualInterestRate = input.nextDouble();

    double monthlyInterestRate = anualInterestRate / 1200;

    System.out.print("Enter number of years: ");
    int numOfYears = input.nextInt();

    double futureValue = investmentAmount * Math.pow(1 + monthlyInterestRate, numOfYears * 12);

    System.out.println("Accumulated value is $" + (int)(futureValue * 100) / 100.0);
    
}