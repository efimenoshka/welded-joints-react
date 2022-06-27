import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Center, Environment } from '@react-three/drei'
import "./model.css"
import { getModelJSX } from './choise-model'
import { ButtonGroup } from 'react-bootstrap'
import { ToggleButton } from 'react-bootstrap'

export default function Model(props) {
  const [index, setIndex] = useState(0)
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Сварной шов', value: '1' },
    { name: 'Кромки', value: '2' }
  ];

  const indexHandler = (index, radio) => {
    setIndex(index)
    setRadioValue(radio)
  }

  return (
    <div>
      <div className="model">
        <div className='buttons-container'>
          <ButtonGroup className="mb-2 my-button">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant="outline-primary"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => indexHandler(idx, e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <Canvas>
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <directionalLight position={[0, -10, -5]} intensity={1} />
          <directionalLight position={[5, -10, -5]} intensity={1} />
          <directionalLight position={[-5, -10, -5]} intensity={1} />
          <Suspense fallback={null}>
            <Center>
              {getModelJSX(props.name, radioValue)}
            </Center>
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

