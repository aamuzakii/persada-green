import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
    <Checkbox.Item label="Item" status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }} />
    </>
    
  );
};

export default MyComponent;