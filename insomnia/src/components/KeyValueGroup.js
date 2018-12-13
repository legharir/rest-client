import React from 'react';
import PropTypes from 'prop-types';
import KeyValueField from './KeyValueField';

const KeyValueGroup = ({
  pairs,
  keyPlaceholder,
  valuePlaceholder,
  onKeyValueChange,
  addKeyValueField,
  removeKeyValueField,
}) => (
  <div>
    {pairs.map(([key, value], index) => (
      <KeyValueField
        addKeyValueField={addKeyValueField}
        removeKeyValueField={removeKeyValueField}
        key={`${index}`}
        keyField={key || ''}
        valueField={value || ''}
        index={index}
        onChange={onKeyValueChange}
        keyPlaceholder={keyPlaceholder}
        valuePlaceholder={valuePlaceholder}
      />
    ))}
  </div>
);

KeyValueGroup.propTypes = {
  addKeyValueField: PropTypes.func.isRequired,
  removeKeyValueField: PropTypes.func.isRequired,
  pairs: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyPlaceholder: PropTypes.string.isRequired,
  valuePlaceholder: PropTypes.string.isRequired,
  onKeyValueChange: PropTypes.func.isRequired,
};

export default KeyValueGroup;
