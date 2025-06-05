function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    const text = newItemText.value.trim();
    const value = newItemValue.value.trim();

    const option = document.createElement('option');
    option.text = text;
    option.value = value;

    const menu = document.getElementById('menu');
    menu.add(option);

}
