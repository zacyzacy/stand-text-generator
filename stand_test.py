import stand
import pytest

def test_generate_stand_text():
    assert stand.generate_stand_text("The World 2") == "「T H E  W O R L D  2」"
