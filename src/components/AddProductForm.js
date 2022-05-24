import React from 'react';
import {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';

export default function AddProductForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Název" name="nazevProduktu" {...register("nazev")}/><br></br>
            <input type="number" placeholder="Cena" name="cenaProduktu" {...register("cena")}/><br></br>
            <input type="text" placeholder="Popis" name="popisProduktu" {...register("popis")}/><br></br>
            <button type="submit">Odeslat</button>
        </form>
    )
}
