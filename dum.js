.click()
.waitForElement('name', ' Open Drawer', 4500) // Open Drawer
.elementByName(' Take Away') // Take Away
.elementByName(' Edit Layout') // Edit Layout
.elementByName('T19')
.click()
.waitForElement('name', 'Cancel', 4500)
.click()
.sleep(500)
.elementByName(' Edit Layout') // Edit Layout
.click()
.sleep(4000)
.elementByName('+ Add Table') //+ Add Table|us.originally.hoicard.debug:id/btn_add_table
.excute({"cmd": "click", "elementId": "8"})
.click()
.waitForElement('name', 'Ok', 500)
.keys(['hello anh Torin'])
.elementByName('Ok')
.click()
.waitForElement('name', 'hello anh Torin1', 4500)
.sleep(1000)