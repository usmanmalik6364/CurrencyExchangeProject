
import React from "react"
import { useState } from "react";
import styles from './HomeComponent.module.scss';
import allCountriesJson from '../../public/allCountries.json';
interface ICountryInterface {
    name: string;
    code: string;
}
export const HomeComponent: React.FunctionComponent = (): JSX.Element => {
    //state
    const [_selectedCountry, _setSelectedCountry] = useState<string>('');
    const [_countries, _setCountries] = useState<ICountryInterface[]>([]);
    //side effects
    React.useEffect(() => {
        const countryNameAndCode: ICountryInterface[] = [];
        if (allCountriesJson.length > 0) {
            allCountriesJson.map((country: ICountryInterface) => {
                let countryObj: ICountryInterface = JSON.parse('{ "name": country.name, code: country.code }');
                countryNameAndCode.push(countryObj);
            });
            _setCountries(countryNameAndCode);
            console.log(countryNameAndCode);
        }
    }, []);

    //render
    return <React.Fragment>{(_countries && _countries.length > 0) &&
        <div className={styles.container}>

        </div>
    }

    </React.Fragment>;
};