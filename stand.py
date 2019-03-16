def generate_stand_text(stand_name):
    stand_text = ["「", "", "」"]
    for c in stand_name:
        stand_text[1] += f"{c} "

    # remove trailing space and extra space between words
    stand_text[1] = stand_text[1][:-1].replace("   ", "  ")

    return "".join(stand_text).upper()


if __name__ == "__main__":
    pass
