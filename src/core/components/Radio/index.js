import React from 'react';

import ConditionalRender from '~/core/components/ConditionalRender';
import { Radio, Label, Chip } from './styles';

const Container = ({ register, children, 'data-qa-anchor': dataQaAnchor, ...props }) => {
  return (
    <Label data-qa-anchor={`${dataQaAnchor}-label`}>
      <Radio {...props} data-qa-anchor={`${dataQaAnchor}-radio`} ref={register} />
      {children}
    </Label>
  );
};

const Radios = ({
  register,
  uniq = 'value',
  name = '',
  value = null,
  items = [],
  disabled = false,
  onChange = () => {},
}) => {
  const handleChange = e => {
    try {
      const newVal = JSON.parse(e.target.value);
      onChange(newVal);
    } catch (err) {
      onChange(e.target.value);
    }
  };

  const Renderer = ({ item, checked, disabled: d }) => {
    const props = {
      ...item,
      checked,
      disabled: d,
    };

    const style = { gridArea: 'label' };
    const ItemRenderer = item.customRenderer;

    return (
      <>
        <ConditionalRender condition={ItemRenderer}>
          <ItemRenderer {...props} style={style} />
          <span style={style}>{item.label}</span>
        </ConditionalRender>
        <Chip checked={checked} />
      </>
    );
  };

  return items.map(item => (
    <Container
      key={item[uniq]}
      register={register}
      name={name}
      value={item.value}
      checked={value === item.value}
      disabled={disabled}
      onChange={handleChange}
      data-qa-anchor={item['data-qa-anchor']}
    >
      <Renderer item={item} checked={value === item.value} disabled={disabled} />
    </Container>
  ));
};

export default Radios;
