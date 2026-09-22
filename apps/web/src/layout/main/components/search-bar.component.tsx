import { useRef, useState, type ChangeEventHandler, type MouseEventHandler } from "react";
import type { JSX } from "react/jsx-runtime";
import styles from "./search-bar.component.module.scss";
import search from "../../../assets/icons/search.svg";
import close from "../../../assets/icons/close.svg";
import keyboard from "../../../assets/icons/keyboard.svg";

function SearchBar():JSX.Element {
    const {
        isResetActive,
        inputValue,
        searchInputRef,
        onChange,
        formActionHandler,
        resetClickHandler
    } = useSearchBar();

    return (
        <div className={styles["search-box"]}>
            <form className={styles["search-form"]} action={formActionHandler}>
                <div className={styles["search-input-area"]}>
                    <label htmlFor="search">
                        <img className={styles["search-label-icon"]} src={search} alt="YT Search Label Icon" />
                    </label>
                    <input
                        ref={searchInputRef}
                        className={styles["search-input-inner"]}
                        name="search"
                        id="search"
                        type="text"
                        placeholder="검색"
                        value={inputValue}
                        onChange={onChange}
                    />
                    <div className={styles["button-group"]}>
                        <button className={styles["keyboard-button"]} type="button">
                            <img src={keyboard} alt="YT Keyboard" />
                        </button>
                        <button
                            className={styles["reset-button"]}
                            type="reset"
                            data-active={isResetActive ? true : undefined}
                            onClick={resetClickHandler}
                        > {/** 기본 숨김 */}
                            {/* 현재 입력 검색어 삭제 */}
                            <img src={close} alt="YT Search Word Reset" />
                        </button>
                    </div>
                </div>
            
                <button className={styles["search-button"]} type="submit">
                    <img className={styles["search-button-icon"]} src={search} alt="YT Search Button Icon" />
                </button>
            </form>
        </div>
    );
}

function useSearchBar() {
    const [inputValue, setInputValue] = useState<string>("");
    const [isResetActive, setIsResetActive] = useState<boolean>(false);

    const searchInputRef = useRef<HTMLInputElement | null>(null);

    const onChange:ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.currentTarget.value);

        if(!isResetActive && event.currentTarget.value !== "") {
            setIsResetActive(true);
        }
        else if(isResetActive && event.currentTarget.value === "") {
            setIsResetActive(false);
        }
    };

    const formActionHandler:(data:FormData) => void = (_) => {
        // 현재 시점에서는 생략합니다.
    };

    const resetClickHandler:MouseEventHandler<HTMLButtonElement> = (_) => {
        setInputValue("");
        setIsResetActive(false);

        if(searchInputRef.current !== null) {
            searchInputRef.current.focus();
        }
    };
    
    return {
        isResetActive,
        inputValue,
        searchInputRef,
        onChange,
        formActionHandler,
        resetClickHandler
    };
}

export default SearchBar;