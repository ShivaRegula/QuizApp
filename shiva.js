<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .calculator {
            width: 250px;
            background: #222;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .display {
            width: 100%;
            height: 50px;
            text-align: right;
            font-size: 2em;
            padding: 10px;
            border: none;
            background: #333;
            color: #fff;
            border-radius: 5px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-top: 10px;
        }
        button {
            height: 50px;
            font-size: 1.5em;
            border: none;
            background: #444;
            color: white;
            border-radius: 5px;
            cursor: pointer;
        }
        button:active {
            background: #666;
        }
        .operator {
            background: #ff9500;
        }
        .operator:active {
            background: #e08900;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" disabled>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendValue('/')" class="operator">/</button>
            <button onclick="appendValue('*')" class="operator">*</button>
            <button onclick="deleteLast()">⌫</button>
            
            <button onclick="appendValue('7')">7</button>
            <button onclick="appendValue('8')">8</button>
            <button onclick="appendValue('9')">9</button>
            <button onclick="appendValue('-')" class="operator">-</button>
            
            <button onclick="appendValue('4')">4</button>
            <button onclick="appendValue('5')">5</button>
            <button onclick="appendValue('6')">6</button>
            <button onclick="appendValue('+')" class="operator">+</button>
            
            <button onclick="appendValue('1')">1</button>
            <button onclick="appendValue('2')">2</button>
            <button onclick="appendValue('3')">3</button>
            <button onclick="calculateResult()" class="operator">=</button>
            
            <button onclick="appendValue('0')">0</button>
            <button onclick="appendValue('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById("display");
        
        function appendValue(value) {
            display.value += value;
        }
        
        function clearDisplay() {
            display.value = "";
        }
        
        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }
        
        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
    </script>
</body>
</html>
