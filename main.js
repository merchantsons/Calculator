import inquirer from 'inquirer';
const takeanswer = await inquirer.prompt([
    { message: 'Enter first number', type: 'number', name: 'FirstNumber' },
    { message: 'Enter second number', type: 'number', name: 'SecondNumber' },
    {
        message: 'Select Operator ?',
        type: 'list',
        name: 'operator',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
if (takeanswer.operator == 'Addition') {
    console.log(takeanswer.FirstNumber + takeanswer.SecondNumber);
}
else if (takeanswer.operator == 'Subtraction') {
    console.log(takeanswer.FirstNumber - takeanswer.SecondNumber);
}
else if (takeanswer.operator == 'Multiplication') {
    console.log(takeanswer.FirstNumber * takeanswer.SecondNumber);
}
else if (takeanswer.operator == 'Division') {
    console.log(takeanswer.FirstNumber / takeanswer.SecondNumber);
}
else {
    console.log('Kindly Select Valid Operator');
}
;
