# CloudflareWorkers SDK exists test

import pytest
from cloudflareworkers_sdk import CloudflareWorkersSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CloudflareWorkersSDK.test(None, None)
        assert testsdk is not None
