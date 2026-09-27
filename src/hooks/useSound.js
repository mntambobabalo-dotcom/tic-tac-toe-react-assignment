import { useContext } from 'react';
import { SfxContext } from '../contexts/SfxContext';

export default function useSound() {
  return useContext(SfxContext);
}
